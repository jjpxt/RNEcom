import { FC } from "react";
import { StyleSheet, Text, View, TextInput, TextInputProps } from "react-native";

interface Props extends TextInputProps {
    label?: string;
};

const FormInput: FC<Props> = ({ label, ...restProps }) => {
    return <View style={styles.InputContainer}>
        <Text style={styles.inputLabel}>{label}</Text>
        <TextInput style={styles.textInput} {...restProps} />
    </View>

}

const styles = StyleSheet.create({
    InputContainer: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#dedede"
    },
    inputLabel: {
        fontSize: 24,
        color: 'rgba(0, 0, 0, 0.5)'
    },
    textInput: {
        fontSize: 20
    }
})

export default FormInput;