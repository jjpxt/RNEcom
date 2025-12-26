import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';

export type AuthStackNavigator = {
    SignIn: undefined,
    SignUp: undefined
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
    },
    screenOptions: {
        headerShown: false
    }
});

const AuthNavigator = createStaticNavigation(AuthStack);

export default AuthNavigator;