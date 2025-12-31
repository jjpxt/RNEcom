import { FC } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface Props {
    label?: string
    onPress?(): void
    active?: boolean
}

const CategoryBtn: FC<Props> = ({ label, active, onPress }) => {
    return <Pressable
        onPress={onPress}
        style={[styles.container, active ? styles.containerActive : styles.container]}>
        <Text style={active ? styles.labelActive : styles.label}>{label}</Text>
    </Pressable>
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 14,
        paddingHorizontal: 12,
        backgroundColor: "#782d4a11",
        borderRadius: 12
    },
    label: {
        color: "black",
        fontSize: 18
    },
    containerActive: {
        paddingHorizontal: 12,
        paddingVertical: 14,
        backgroundColor: "#222222ff",
        borderRadius: 12
    },
    labelActive: {
        color: "white",
        fontSize: 18
    }
});

export default CategoryBtn;