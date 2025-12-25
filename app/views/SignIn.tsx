import { FC, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormInput from "../components/FormInput";
import PrimaryButton from "../components/PrimaryButton";

interface Props { };

const SignIn: FC<Props> = () => {

    const [signInInfo, setSignInInfo] = useState({
        email: "",
        password: ""
    });

    return <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Welcome!</Text>
            </View>
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

            <PrimaryButton title="Log In"
                onPress={() => {
                    console.log("first")
                }} />
            <View style={styles.navLinkContainer}>
                <Text style={styles.navLink}>Don't have an account?</Text>
            </View>
        </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        gap: 20,
        paddingTop: 150
    },
    safeAreaView: {
        flex: 1,
    },
    title: {
        fontSize: 30,
        fontWeight: 900,
        textAlign: "center"
    },
    navLinkContainer: {
        marginTop: "auto",
        paddingVertical: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    navLink: {
        fontWeight: "bold",
        textDecorationLine: "underline"
    }
})

export default SignIn;