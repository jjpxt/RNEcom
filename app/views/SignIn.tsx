/* eslint-disable no-catch-shadow */
import { FC, useState } from "react";
import FormInput from "../components/FormInput";
import FormContainer from "../components/FormContainer";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthStackNavigator } from "../navigation/AuthNavigator";
import { errorType } from "./SignUp";
import axios, { AxiosError } from "axios";
import { API_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props { };

const SignIn: FC<Props> = () => {

    const [signInInfo, setSignInInfo] = useState({
        email: "",
        password: ""
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [errors, setErrors] = useState<errorType>({});
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [error, setError] = useState("");
    const navigation = useNavigation<NavigationProp<AuthStackNavigator>>();

    const handleSubmit = async () => {
        setError("");
        setErrors({});
        try {
            const url = API_URL;
            const { data } = await axios.post(`${url}/auth/sign-in`, signInInfo);
            await AsyncStorage.setItem("auth_token", data.token)
            navigation.navigate("Home", { profile: data.profile });
        } catch (error) {
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
            onLinkPress={() => {
                navigation.navigate("SignUp")
            }}
            onSubmit={handleSubmit}
            btnTitle="Sign In" navLinkTitle="Don't have an account?">
            <FormInput label="Email"
                placeholder="email@email.com"
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={email => {
                    setSignInInfo({ ...signInInfo, email })
                }}
            />
            <FormInput label="Password"
                placeholder="*******"
                autoCapitalize="none"
                secureTextEntry
                onChangeText={password => {
                    setSignInInfo({ ...signInInfo, password })
                }}
            />
        </FormContainer>
    )
}
export default SignIn;