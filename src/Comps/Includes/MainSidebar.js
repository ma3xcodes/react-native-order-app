import React, {Component} from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { DrawerItems} from 'react-navigation'
import UserImage from '../../../assets/user.png'

class MainSidebar extends Component {
    constructor(props){
        super(props);
        //console.log(props.screenProps);
        this.state = {
            scrollHeight:0,
            userViewHeight:0,
            safeAreaHeight:0,
            footerViewHeight:0,
            totalHeight:0
        }
    }
    comDimensions = (layout,component)=>{
        let height = layout.height;
        switch(component){
            case 'scrollview':
                this.setState({
                    scrollHeight : height
                });
                break;
            case 'userview':
                this.setState({
                    userViewHeight : height
                });
                break;
            case 'safearea':
                this.setState({
                    safeAreaHeight : height
                });
                break;
            case 'footerview':
                this.setState({
                    footerViewHeight : height
                });
                break;
        }
        let {userViewHeight, safeAreaHeight, footerViewHeight} = this.state;
        let total = userViewHeight + safeAreaHeight + footerViewHeight;
        this.setState({
            totalHeight: total
        });        
    }
    
    render(){
        const {navigation} = this.props;
        return (        
            <ScrollView style={{flex: 1, flexDirection: 'column' }} onLayout={(event) => { this.comDimensions(event.nativeEvent.layout,'scrollview') }}>
                <View style={styles.container} onLayout={(event) => { this.comDimensions(event.nativeEvent.layout,'userview') }}>
                    <View style={styles.userContent}>
                        <View style={styles.userImageContent}>
                            <Image source={UserImage} style={styles.userImage} />
                        </View>
                        <View style={styles.userInfoContent}>
                            <Text ellipsizeMode="tail" numberOfLines={1}>User Names test test test test test</Text>
                            <Text ellipsizeMode="tail" numberOfLines={1}>usernames@hotmailgmail.com</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Icon name='pencil' type="font-awesome" size={25} color={'#E1E1E1'} onPress={()=>{
                                console.log('Edit preset');
                                navigation.navigate('Notifications')
                            }} />
                        </View>
                    </View>
                </View>
                <SafeAreaView onLayout={(event) => { this.comDimensions(event.nativeEvent.layout,'safearea') }}>
                    <DrawerItems activeTintColor="#FF3D47" itemsContainerStyle={{flex:1,marginTop: -4,marginBottom: -4,}} {...this.props} />
                </SafeAreaView>            
                <View style={{flex:1,flexDirection:'row',alignItems:'stretch'}} onLayout={(event) => { this.comDimensions(event.nativeEvent.layout,'footerview') }}>
                    <TouchableOpacity style={{alignSelf:'flex-end'}} onPress={this.props.screenProps.logout}>
                        <View style={styles.item}>
                            <View style={styles.iconContainer}>
                                <Icon name="sign-out" type="font-awesome" />
                            </View>
                            <Text style={styles.label}>Logout</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height:115,
        justifyContent: 'center',
        padding: 15,
        borderBottomColor: '#E9EBEE',
        borderBottomWidth: 1,
    },
    userContent:{
        flex:1,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
    },
    userImageContent:{
        flex:3
    },
    userImage: {
        width:80,
        height:80,
        borderRadius:50,
        borderColor: '#E9EBEE',
        borderWidth: 1,
        padding:2,
    },
    userInfoContent: {
        flex:5,
        marginLeft: 5,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        margin: 16,
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, .87)',
    },
    iconContainer: {
        marginHorizontal: 16,
        width: 24,
        alignItems: 'center',
    },
});

export default MainSidebar;