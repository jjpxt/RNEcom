/* eslint-disable no-catch-shadow */
import { FC, useState } from 'react';
import FormContainer from '../components/FormContainer';
import FormInput from '../components/FormInput';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AuthStackNavigator } from '../navigation/AuthNavigator';
import { API_URL } from '@env';
import axios, { AxiosError } from 'axios';
import ErrorMessage from '../components/ErrorMessage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../context/AuthProvider';

interface Props { }

export type errorType = Record<string, string[] | undefined>

const SignUp: FC<Props> = () => {
    const [signUpInfo, setSignUpInfo] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState<errorType>({});
    const [error, setError] = useState("");
    const navigation = useNavigation<NavigationProp<AuthStackNavigator>>();
    const { login } = useAuth();

    const handleSubmit = async () => {
        setError("");
        setErrors({});
        try {
            const url = API_URL;
            await axios.post(`${url}/auth/sign-up`, signUpInfo);
            const { data } = await axios.post(`${url}/auth/sign-in`, { email: signUpInfo.email, password: signUpInfo.password });
            await AsyncStorage.setItem("auth_token", data.token)
            await login({ email: signUpInfo.email, password: signUpInfo.password })
            // eslint-disable-next-line @typescript-eslint/no-shadow
        } catch (error: any) {
            if (error instanceof AxiosError) {
                const responseData = error.response?.data;
                if (responseData.errors)
                    setErrors(error.response?.data.errors);
                if (responseData.error)
                    setError(responseData.error);
            }
        }
    };

    return (
        <FormContainer
            onSubmit={handleSubmit}
            btnTitle="Sign Up"
            navLinkTitle="I already have an account"
            onLinkPress={() => navigation.navigate('SignIn')}
        >
            {error ? <ErrorMessage size={22} message={error} /> : null}
            <FormInput
                label="Name"
                placeholder="Insert your name"
                errors={errors.name}
                onChangeText={(text) =>
                    setSignUpInfo({ ...signUpInfo, name: text })
                }
            />
            <FormInput
                label="Email"
                placeholder="email@email.com"
                autoCapitalize="none"
                errors={errors.email}
                keyboardType="email-address"
                onChangeText={(text) =>
                    setSignUpInfo({ ...signUpInfo, email: text })
                }
            />
            <FormInput
                label="Password"
                placeholder="*******"
                autoCapitalize="none"
                errors={errors.password}
                secureTextEntry
                onChangeText={(text) =>
                    setSignUpInfo({ ...signUpInfo, password: text })
                }
            />
        </FormContainer>
    );
};

export default SignUp;