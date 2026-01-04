import AsyncStorage from '@react-native-async-storage/async-storage';
import { FC, ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import client from '../../client';

type Profile = {
    name: string;
    email: string;
};

type SignInCredentials = {
    email: string;
    password: string;
};

interface AuthContextType {
    isAuth: boolean;
    profile: Profile | null;
    isLoading: boolean;
    login(credentials: SignInCredentials): Promise<void>;
    logout(): Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
    isAuth: false,
    profile: null,
    isLoading: true,
    login: async () => {},
    logout: async () => {},
});

interface Props {
    children: ReactNode;
}

const AuthProvider: FC<Props> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuth, setIsAuth] = useState(false);
    const [profile, setProfile] = useState<Profile | null>(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const token = await AsyncStorage.getItem('auth_token');
                if (token) {
                    const { data } = await client.get('/auth/is-auth', {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    setIsAuth(true);
                    setProfile(data.profile);
                }
            } catch (error) {
                console.log('Authentication check failed:', error);
                await AsyncStorage.removeItem('auth_token');
            } finally {
                setIsLoading(false);
            }
        };

        checkAuth();
    }, []);

    const login = async (credentials: SignInCredentials) => {
        try {
            console.log('Attempting login with:', credentials);

            const response = await client.post('/auth/sign-in', credentials, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('API response:', response.data);

            const { token, profile: userProfile } = response.data;

            if (!token) {
                throw new Error('Token not returned by the API');
            }

            await AsyncStorage.setItem('auth_token', token);
            setIsAuth(true);
            setProfile(userProfile || null);

            console.log('Login successful! Profile:', userProfile);
        } catch (error: any) {
            console.error('Login failed:', error);
            console.error('Status:', error.response?.status);
            console.error('Error data:', error.response?.data);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await AsyncStorage.removeItem('auth_token');
            setIsAuth(false);
            setProfile(null);
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ isAuth, profile, isLoading, login, logout }}>
            {isLoading ? (
                <View style={styles.loadingContainer}>
                    <Text style={styles.loadingText}>Loading...</Text>
                </View>
            ) : (
                children
            )}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
    },
    loadingText: {
        fontSize: 18,
        color: '#666',
    },
});

export default AuthProvider;