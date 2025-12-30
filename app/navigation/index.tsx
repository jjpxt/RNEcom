import { FC } from 'react';
import { useAuth } from '../context/AuthProvider';
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';
import { DefaultTheme } from '@react-navigation/native';

interface Props { }


const Theme: ReactNavigation.Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "#FFF",
    },
};

const AppNavigator: FC<Props> = () => {
    const authContext = useAuth();

    return authContext.isAuth ? <TabNavigator theme={Theme} /> : <AuthNavigator theme={Theme} />
}

export default AppNavigator;