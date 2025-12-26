import { FC, useState } from 'react';
import FormContainer from '../components/FormContainer';
import FormInput from '../components/FormInput';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AuthStackNavigator } from '../navigation/AuthNavigator';

interface Props { }

const SignUp: FC<Props> = () => {

    const [signIUpInfo, setSignUpInfo] = useState({
        name: "",
        email: "",
        password: ""
    });

    const navigation = useNavigation<NavigationProp<AuthStackNavigator>>();

    return (
        <FormContainer
            onLinkPress={() => {
                navigation.navigate("SignIn")
            }}
            btnTitle="Sign Up" navLinkTitle="I already have an account">
            <FormInput label="Name"
                placeholder="Insert your name"
                onChangeText={name => {
                    setSignUpInfo({ ...signIUpInfo, email: name })
                }}
            />
            <FormInput label="Email"
                placeholder="email@email.com"
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={email => {
                    setSignUpInfo({ ...signIUpInfo, email })
                }}
            />
            <FormInput label="Password"
                placeholder="*******"
                autoCapitalize="none"
                secureTextEntry
                onChangeText={password => {
                    setSignUpInfo({ ...signIUpInfo, password })
                }}
            />
        </FormContainer>
    )
}

export default SignUp;