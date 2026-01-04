import { FC } from 'react';
import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useCart } from '../context/CartProvider';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

const Cart: FC = () => {
    const cartContext = useCart();
    const items = cartContext?.items || [];
    const navigation = useNavigation();

    React.useEffect(() => {
        const count = cartContext?.countAllItems() || 0;
        const badge = count > 0 ? (count > 99 ? '99+' : count.toString()) : undefined;

        navigation.setOptions({ tabBarBadge: badge });
    }, [navigation, cartContext]);

    const totalItems = cartContext?.countAllItems() ?? 0;
    const totalPrice = Number(cartContext?.countTotalPrice() ?? 0);

    const renderItem = ({ item }: { item: any }) => {
        return (
            <View style={styles.itemContainer}>
                <Image
                    source={{ uri: item.product.poster }}
                    style={styles.productImage}
                    resizeMode="cover"
                />

                <View style={styles.infoContainer}>
                    <Text style={styles.title} numberOfLines={2}>
                        {item.product.title}
                    </Text>
                    <Text style={styles.price}>
                        $ {item.product.price.sale.toFixed(2)}
                    </Text>
                    <Text style={styles.quantity}>Quantity: {item.count}</Text>

                    <View style={styles.actions}>
                        <TouchableOpacity
                            style={styles.actionButton}
                            onPress={() => cartContext?.decreaseItem(item.product.id)}
                        >
                            <Text style={styles.actionText}>-</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.actionButton}
                            onPress={() => cartContext?.increaseItem(item.product)}
                        >
                            <Text style={styles.actionText}>+</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.actionButton, styles.deleteButton]}
                            onPress={() => cartContext?.removeFromCart(item.product.id)}
                        >
                            <Text style={styles.actionText}>🗑️</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Cart</Text>
                <Text style={styles.headerSubtitle}>
                    {totalItems} {totalItems === 1 ? 'item' : 'items'}
                </Text>
            </View>

            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={(item) => item.product.id.toString()}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>Cart is empty</Text>
                    </View>
                }
                contentContainerStyle={items.length === 0 && styles.emptyList}
            />

            {items.length > 0 && (
                <View style={styles.footer}>
                    <Text style={styles.totalText}>Total:</Text>
                    <Text style={styles.totalPrice}>
                        $ {totalPrice.toFixed(2)}
                    </Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    header: {
        padding: 20,
        backgroundColor: '#fff',
        elevation: 4,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2c3e50',
    },
    headerSubtitle: {
        fontSize: 16,
        color: '#666',
        marginTop: 4,
    },
    itemContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 16,
        overflow: 'hidden',
        elevation: 3,
    },
    productImage: {
        width: 120,
        height: 120,
    },
    infoContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#2c3e50',
        marginBottom: 8,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#e74c3c',
        marginBottom: 4,
    },
    quantity: {
        fontSize: 15,
        color: '#666',
    },
    actions: {
        flexDirection: 'row',
        marginTop: 10,
    },
    actionButton: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 5,
    },
    deleteButton: {
        backgroundColor: '#e74c3c',
    },
    actionText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100,
    },
    emptyText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#666',
        marginBottom: 8,
    },
    emptyList: {
        flexGrow: 1,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
        margin: 16,
        borderRadius: 16,
        elevation: 5,
    },
    totalText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#2c3e50',
    },
    totalPrice: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#e74c3c',
    },
});

export default Cart;