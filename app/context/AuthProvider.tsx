import AsyncStorage from '@react-native-async-storage/async-storage';
import { FC, ReactNode, createContext, useContext, useEffect, useState } from 'react';
import client from '../../client';
import { Text, View, StyleSheet } from 'react-native';

type Profile = {
    name: string
    email: string
}

type SignInInfo = {
    email: string
    password: string
}

interface DefaultAuthContext {
    isAuth: Boolean
    profile: Profile | null
    logout(): void
    login(value: SignInInfo): void
}

export const AuthContext = createContext<DefaultAuthContext>({
    isAuth: false,
    profile: null,
    logout() { },
    login() { }
});


interface Props {
    children: ReactNode
}

const AuthProvider: FC<Props> = ({ children }) => {
    const [busy, setBusy] = useState(true);
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
            .finally(() => {
                setBusy(false)
            });
    }, []);

    const logout = async () => {
        await AsyncStorage.removeItem("auth_token");
        setIsAuth(false);
    }

    const login = async (value: SignInInfo) => {
        const { data } = await client.post(`/auth/sign-in`, value);
        await AsyncStorage.setItem("auth_token", data.token);
        setIsAuth(true);
    }

    return <AuthContext.Provider value={{ isAuth, profile, logout, login }}>
        {busy ? <View style={styles.container}>
            <Text>Fetching...</Text>
        </View> : children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default AuthProvider;