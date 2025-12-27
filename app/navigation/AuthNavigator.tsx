import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import Home from '../views/Home';

export type AuthStackNavigator = {
    SignIn: undefined,
    SignUp: undefined,
    Home: { profile: { name: string; email: string } }
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
        }
    },
    screenOptions: {
        headerShown: false
    }
});

const AuthNavigator = createStaticNavigation(AuthStack);

export default AuthNavigator;