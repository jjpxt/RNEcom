import { FC } from "react";
import { StyleSheet, Text, View, TextInput, TextInputProps } from "react-native";
import ErrorMessage from "./ErrorMessage";

interface Props extends TextInputProps {
    label?: string;
    errors?: string[];
};

const FormInput: FC<Props> = ({ label, errors, ...restProps }) => {
    return <View style={styles.InputContainer}>
        <Text style={styles.inputLabel}>{label}</Text>
        <TextInput style={styles.textInput} {...restProps} />
        {errors?.map((err, index) => {
            return <ErrorMessage key={index} message={err} />
        })}
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
    },

})

export default FormInput;