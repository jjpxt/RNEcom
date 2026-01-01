import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../views/Home';
import SingleProduct from '../views/SingleProduct';

export type HomeNavigatorProps = {
    Home: undefined,
    SingleProduct: undefined,
}

const HomeStack = createNativeStackNavigator<HomeNavigatorProps>({
    screens: {
        Home: {
            screen: Home,
        },
        SingleProduct: {
            screen: SingleProduct,
        },
    },
    screenOptions: {
        headerShown: false
    }
});


export default HomeStack;