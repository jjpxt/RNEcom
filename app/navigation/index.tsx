import { FC } from 'react';
import { useAuth } from '../context/AuthProvider';
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';

interface Props { }

const AppNavigator: FC<Props> = () => {
    const authContext = useAuth();

    return authContext.isAuth ? <TabNavigator /> : <AuthNavigator />
}

export default AppNavigator;