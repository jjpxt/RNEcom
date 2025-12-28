import AsyncStorage from '@react-native-async-storage/async-storage';
import { FC, ReactNode, createContext, useContext, useEffect, useState } from 'react';
import client from '../../client';

type Profile = {
    name: string
    email: string
}

interface DefaultAuthContext {
    isAuth: Boolean
    profile: Profile | null
}

export const AuthContext = createContext<DefaultAuthContext>({
    isAuth: false,
    profile: null
});


interface Props {
    children: ReactNode
}

const AuthProvider: FC<Props> = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [profile, setProfile] = useState<DefaultAuthContext["profile"]>(null);

    useEffect(() => {
        const readTokenFromAsyncStorage = async () => {
            const result = await AsyncStorage.getItem("auth_token");
            if (result) {
                const { data } = await client.get("/auth/is-auth", {
                    headers: {
                        Authorization: "Bearer " + result
                    }
                });
                setIsAuth(true)
                setProfile(data.profile)
            }
        }

        readTokenFromAsyncStorage()
    }, [])

    return <AuthContext.Provider value={{ isAuth, profile }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext);
}

export default AuthProvider;