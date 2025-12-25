import { FC } from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';

interface Props {
    title?: string,
    onPress?(): void
}

const PrimaryButton: FC<Props> = ({ title, onPress }) => {
    return (
        <Pressable onPress={onPress}
            style={({ pressed }) => [
                styles.container,
                pressed && styles.pressed,
            ]}>
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: "#ffa500",
        borderRadius: 10
    },
    pressed: {
        opacity: 0.5
    },
    title: {
        fontSize: 28,
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
    }
});

export default PrimaryButton;