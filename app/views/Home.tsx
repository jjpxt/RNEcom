import { FC, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { StackScreenProps } from "@react-navigation/stack"
import { AuthStackNavigator } from '../navigation/AuthNavigator';
// import { useAuth } from '../context/AuthProvider';
import client from '../../client';
// import { AuthContext } from '../context/AuthProvider';

type Props = StackScreenProps<AuthStackNavigator, 'Home'>

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
}

const Home: FC<Props> = ({ /*route*/ }) => {
    const [products, setProducts] = useState<Product[]>([]);
    // const authContext = useAuth();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await client.get<{ products: Product[] }>("/product/products")
                setProducts(data.products)
            } catch (error) {
                console.log(error);
            }
        };

        fetchProducts();
    }, []);

    return <ScrollView style={styles.container}>
        <Text>Home</Text>
        <>{products.map(product => {
            return <View key={product.id}>
                <Text>{product.title}</Text>
                <Text>{product.description}</Text>
                <Text>{product.price.mrp}</Text>
                <Text>{product.price.sale}</Text>
            </View>
        })}</>
    </ScrollView>
}

const styles = StyleSheet.create({
    container: {},
});

export default Home;