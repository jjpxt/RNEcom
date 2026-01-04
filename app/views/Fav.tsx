import { FC } from 'react';
import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { useFavorite } from '../context/FavoriteProvider';
import { useNavigation } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';
import React from 'react';

const { width } = Dimensions.get('window');
const numColumns = width > 600 ? 3 : 2;

const Fav: FC = () => {
    const fav = useFavorite();
    const navigation = useNavigation<any>();
    const items = fav?.items || [];

    React.useEffect(() => {
        const count = items.length;
        const badge = count > 0 ? (count > 99 ? '99+' : count.toString()) : undefined;
        navigation.setOptions({ tabBarBadge: badge });
    }, [navigation, items.length]);
    const removeFavorite = (product: any) => {
        fav?.updateFavorite(product);
    };

    const goToDetail = (product: any) => {
        navigation.dispatch(
            CommonActions.navigate({
                name: 'Home',
                params: {
                    screen: 'ProductDetail',
                    params: { product },
                },
            })
        );
    };

    const renderItem = ({ item }: { item: any }) => (
        <TouchableOpacity
            style={styles.card}
            activeOpacity={0.8}
            onPress={() => goToDetail(item)}
        >
            <Image
                source={{ uri: item.poster }}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.info}>
                <Text style={styles.title} numberOfLines={2}>
                    {item.title}
                </Text>
            </View>

            <TouchableOpacity
                onPress={(e) => {
                    e.stopPropagation();
                    removeFavorite(item);
                }}
                style={styles.removeButton}
            >
                <Text style={styles.removeText}>✕</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );

    if (items?.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyTitle}>No favorites yet ❤️</Text>
                <Text style={styles.emptySubtitle}>
                    Tap the heart on product details to add here
                </Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>My Favorites</Text>
                <Text style={styles.headerCount}>
                    {items?.length} {items?.length === 1 ? 'item' : 'items'}
                </Text>
            </View>

            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={numColumns}
                contentContainerStyle={styles.list}
                columnWrapperStyle={styles.columnWrapper}
            />
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
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2c3e50',
    },
    headerCount: {
        fontSize: 16,
        color: '#bf50d8',
        marginTop: 4,
        fontWeight: '600',
    },
    list: {
        padding: 16,
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
    card: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 16,
        margin: 8,
        overflow: 'hidden',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        maxWidth: (width / numColumns) - 24,
    },
    image: {
        width: '100%',
        height: 180,
    },
    info: {
        padding: 12,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#2c3e50',
        textAlign: 'center',
    },
    removeButton: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 32,
        height: 32,
        backgroundColor: 'rgba(231, 76, 60, 0.9)',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    removeText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
    emptyTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#666',
        marginBottom: 12,
        textAlign: 'center',
    },
    emptySubtitle: {
        fontSize: 16,
        color: '#888',
        textAlign: 'center',
        lineHeight: 24,
    },
});

export default Fav;