import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props { }

const SingleProduct: FC<Props> = () => {
    return <View style={styles.container}>
        <Text>SIngle produ t</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {},
});

export default SingleProduct;