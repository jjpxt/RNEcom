import { FC } from 'react';
import { StyleSheet, Text } from 'react-native';

interface Props {
    message?: string
    size?: number
}

const primaryButton: FC<Props> = ({ message, size = 14 }) => {
    return <Text style={[styles.error, { fontSize: size }]}>{message}</Text>
}

const styles = StyleSheet.create({
    error: {
        fontSize: 22,
        color: "red"
    }
});

export default primaryButton;