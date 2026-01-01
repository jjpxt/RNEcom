import { FC } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, FlatList, Dimensions } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { HomeNavigatorProps } from '../navigation/HomeNavigator';
import { Product } from '../views/Home';

const { width } = Dimensions.get('window');

type Props = StackScreenProps<HomeNavigatorProps, 'ProductDetail'>;

const ProductDetail: FC<Props> = ({ route }) => {
    const { product } = route.params as { product: Product };

    const images = [product.poster, ...(product.images || [])];

    const renderImage = ({ item }: { item: string }) => (
        <View style={styles.slide}>
            <Image source={{ uri: item }} style={styles.carouselImage} resizeMode="contain" />
        </View>
    );

    return (
        <ScrollView style={styles.container}>
            {/*  image carousel */}
            <FlatList
                data={images}
                renderItem={renderImage}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                snapToAlignment="center"
                decelerationRate="fast"
                style={styles.carousel}
            />

            <View style={styles.pagination}>
                {images.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                        ]}
                    />
                ))}
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.category}>Category: {product.category}</Text>
                <Text style={styles.description}>{product.description}</Text>

                <View style={styles.priceContainer}>
                    <Text style={styles.mrp}>From: ${product.price.mrp.toFixed(2)}</Text>
                    <Text style={styles.sale}>To: ${product.price.sale.toFixed(2)}</Text>
                </View>

                {(product.bulletPoints || []).length > 0 && (
                    <View style={styles.featuresCard}>
                        <Text style={styles.featuresTitle}>Main features</Text>
                        {(product.bulletPoints || []).map((point, index) => (
                            <View key={index} style={styles.featureItem}>
                                <View style={styles.checkCircle}>
                                    <Text style={styles.checkText}>✓</Text>
                                </View>
                                <Text style={styles.featureText}>{point}</Text>
                            </View>
                        ))}
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    carousel: {
        height: 420,
    },
    slide: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    carouselImage: {
        width: width,
        height: 420,
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        backgroundColor: '#f8f9fa',
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#bf50d8',
        marginHorizontal: 4,
        opacity: 0.4,
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 8,
    },
    category: {
        fontSize: 17,
        color: '#bf50d8',
        fontWeight: '600',
        marginBottom: 16,
    },
    description: {
        fontSize: 18,
        color: '#555',
        lineHeight: 28,
        marginBottom: 30,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff3cd',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 20,
        alignSelf: 'flex-start',
        marginBottom: 30,
        elevation: 3,
    },
    mrp: {
        fontSize: 18,
        color: '#888',
        textDecorationLine: 'line-through',
        marginRight: 12,
    },
    sale: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#e74c3c',
    },
    featuresCard: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 20,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
    },
    featuresTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 18,
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 16,
    },
    checkCircle: {
        width: 32,
        height: 32,
        backgroundColor: '#bf50d8',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 14,
        marginTop: 2,
    },
    checkText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    featureText: {
        flex: 1,
        fontSize: 17,
        color: '#34495e',
        lineHeight: 26,
    },
});

export default ProductDetail;