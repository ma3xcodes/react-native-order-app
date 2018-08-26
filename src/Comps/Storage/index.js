import Collection from 'storm-react-native'

const User = new Collection('@user:store')
const Cart = new Collection('@cart:store')

const AddCartItem = (item) =>{
    return Cart.save(item);
}

const RemoveCartItem = (item)=>{
    return Cart.erase({
        id:item.id
    });
}

const CartItems = ()=>{
    return Cart.find();
}

const ClearCartItems = ()=>{
    return Cart.erase();
}

const UserInfo = ()=>{
    return User.find();
}

const UpdateUserInfo = (user,data)=>{
    User.update({
        // where field
        where: {
            _id: user.id
        },
        // set field
        set: {
            data
        }
      })
}

export {
    AddCartItem,
    RemoveCartItem,
    CartItems,
    ClearCartItems
}