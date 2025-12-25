import { FC, ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "../components/PrimaryButton";

interface Props {
    children: ReactNode
    btnTitle?: string
    navLinkTitle?: string
    onLinkPress?(): void
    onSubmit?(): void
};

const FormContainer: FC<Props> = ({ children, btnTitle, navLinkTitle, onLinkPress, onSubmit }) => {

    return <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Welcome!</Text>
            </View>

            {children}

            <PrimaryButton title={btnTitle} onPress={onSubmit} />
            <View style={styles.navLinkContainer}>
                <Text onPress={onLinkPress} style={styles.navLink}>{navLinkTitle}</Text>
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
        fontSize: 40,
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
        // textDecorationLine: "underline",
        fontSize: 20
    }
})

export default FormContainer;