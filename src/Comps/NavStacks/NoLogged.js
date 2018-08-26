import { createStackNavigator } from 'react-navigation'
import WelcomeComp from '../WelcomeComp'
import LoginComp from '../Auth/LoginComp'
import SignupComp from '../Auth/SignupComp'
import ForgotPasswordComp from '../Auth/ForgotPasswordComp'

const NoLogged = createStackNavigator(
    {
      Welcome: { 
        screen: WelcomeComp, 
        navigationOptions:{
          header: null,
          screenProps:{
            keyOne:"uno"
          }
        },      
      },
      Login: { 
        screen: LoginComp, 
        navigationOptions:{
          header: null,
          title:'Login'
        } 
      },
      Signup: {
        screen: SignupComp,
        navigationOptions: {
          header: null,
          title: 'Signup'
        }
      },
      Forgot: {
        screen: ForgotPasswordComp,
        navigationOptions: {
          header: null,
          title: 'Forgot password'
        }
      }
    },
    {
      initialRouteName: 'Welcome',
    }
);

export default NoLogged;