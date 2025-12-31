import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native';

interface Props<T> {
    data: T[]
    renderItem: ListRenderItem<T>
}

const CategoryList = <T extends unknown>(props: Props<T>) => {
    return <View style={styles.container}>
        <FlatList horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 14, padding: 12 }}
            data={props.data}
            renderItem={props.renderItem} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        padding: 3
    },
});

export default CategoryList;