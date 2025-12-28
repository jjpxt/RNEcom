import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props { }

const Cart: FC<Props> = () => {
    return <View style={styles.container}>
        <Text>
            Cart
        </Text>
    </View>
}

const styles = StyleSheet.create({
    container: {},
});

export default Cart;