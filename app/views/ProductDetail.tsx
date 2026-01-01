import { FC } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackNavigator } from '../navigation/AuthNavigator';

type Props = StackScreenProps<AuthStackNavigator, 'ProductDetail'>;

const ProductDetail: FC<Props> = ({ route }) => {
    const { product } = route.params;

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
            <Image source={{ uri: product.poster }} style={styles.image} resizeMode="cover" />

            <View style={styles.info}>
                <Text style={styles.title}>{product.title}</Text>

                <Text style={styles.category}>Category: {product.category}</Text>

                <Text style={styles.description}>{product.description}</Text>

                <View style={styles.priceContainer}>
                    <Text style={styles.mrp}>From: ${product.price.mrp.toFixed(2)}</Text>
                    <Text style={styles.sale}>To: ${product.price.sale.toFixed(2)}</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 400,
    },
    info: {
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    category: {
        fontSize: 16,
        color: '#bf50d8',
        marginBottom: 15,
        fontWeight: '600',
    },
    description: {
        fontSize: 18,
        color: '#555',
        lineHeight: 26,
        marginBottom: 30,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    mrp: {
        fontSize: 18,
        color: '#888',
        textDecorationLine: 'line-through',
    },
    sale: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#e74c3c',
    },
});

export default ProductDetail;