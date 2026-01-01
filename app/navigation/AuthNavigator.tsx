import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import Home, { Product } from '../views/Home';
import ProductDetail from '../views/ProductDetail';

export type AuthStackNavigator = {
    SignIn: undefined,
    SignUp: undefined,
    Home: undefined
    ProductDetail: { product: Product }
}

const AuthStack = createNativeStackNavigator<AuthStackNavigator>({
    initialRouteName: "SignIn",
    screens: {
        SignIn: {
            screen: SignIn,
        },
        SignUp: {
            screen: SignUp,
        },
        Home: {
            screen: Home
        },
        ProductDetail: {
            screen: ProductDetail,
            options: {
                headerShown: true,
                title: 'Product Details',
            }
        }
    },
    screenOptions: {
        headerShown: false
    }
});

const AuthNavigator = createStaticNavigation(AuthStack);

export default AuthNavigator;