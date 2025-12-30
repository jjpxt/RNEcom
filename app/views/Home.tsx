import { FC, useEffect, useState } from 'react';
import { FlatList, Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackNavigator } from '../navigation/AuthNavigator';
import client from '../../client';

type Props = StackScreenProps<AuthStackNavigator, 'Home'>;

type Product = {
    id: number;
    title: string;
    description: string;
    category: string;
    poster: string;
    price: {
        mrp: number;
        sale: number;
    };
};

const Home: FC<Props> = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await client.get<{ products: Product[] }>("/product/products");
                setProducts(data.products);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProducts();
    }, []);

    const renderProduct = ({ item: product }: { item: Product }) => {
        return (
            <TouchableOpacity activeOpacity={0.8} style={styles.card}>
                <Image
                    source={{ uri: product.poster }}
                    style={styles.image}
                    resizeMode="cover"
                />
                <View style={styles.info}>
                    <Text style={styles.title} numberOfLines={2}>
                        {product.title}
                    </Text>
                    <Text style={styles.description} numberOfLines={2}>
                        {product.description}
                    </Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.mrp}>
                            $ {product.price.mrp.toFixed(2)}
                        </Text>
                        <Text style={styles.sale}>
                            $ {product.price.sale.toFixed(2)}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container} >
            <FlatList
                data={products}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.list}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bf50d815',
        borderTopStartRadius: 15,
        borderTopEndRadius: 15
    },
    list: {
        padding: 16,
        gap: 16,
    },
    card: {
        backgroundColor: '#ffffffff',
        borderRadius: 16,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: 220,
    },
    info: {
        padding: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    description: {
        fontSize: 17,
        color: '#666',
        marginBottom: 12,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    mrp: {
        fontSize: 14,
        color: '#888',
        textDecorationLine: 'line-through',
    },
    sale: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#e74c3c',
    },
});

export default Home;