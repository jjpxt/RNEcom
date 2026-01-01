import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../views/Home';
import ProductDetail from '../views/ProductDetail';
import { Product } from '../views/Home';

export type HomeNavigatorProps = {
    HomeScreen: undefined;
    ProductDetail: { product: Product };
};

const HomeStack = createNativeStackNavigator<HomeNavigatorProps>({
    initialRouteName: "HomeScreen",
    screens: {
        HomeScreen: {
            screen: Home,
            options: {
                headerShown: false,
            },
        },
        ProductDetail: {
            screen: ProductDetail,
            options: {
                headerShown: true,
                title: 'Product Details',
                headerBackTitle: 'Back',
                headerTintColor: '#333',
                headerTitleAlign: 'center',
            },
        },
    },
});

export default HomeStack;