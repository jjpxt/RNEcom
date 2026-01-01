import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../views/Home';
import ProductDetail from '../views/ProductDetail';

export type HomeNavigatorProps = {
    Home: undefined,
    ProductDetail: undefined,
}

const HomeStack = createNativeStackNavigator<HomeNavigatorProps>({
    screens: {
        Home: {
            screen: Home,
        },
        ProductDetail: {
            screen: ProductDetail,
        },
    },
    screenOptions: {
        headerShown: false
    }
});


export default HomeStack;