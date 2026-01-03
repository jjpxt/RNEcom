import { FC } from 'react';
import { StyleSheet, Pressable, Text, StyleProp, ViewStyle } from 'react-native';

interface Props {
    title?: string,
    style?: StyleProp<ViewStyle>
    onPress?(): void
}

const PrimaryButton: FC<Props> = ({ title, style, onPress }) => {
    return (
        <Pressable onPress={onPress}
            style={({ pressed }) => [
                styles.container,
                pressed && styles.pressed,
                style
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