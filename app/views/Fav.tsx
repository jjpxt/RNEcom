import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props { }

const primaryButton: FC<Props> = () => {
    return <View style={styles.container}>
        <Text>
            Fav
        </Text>
    </View>
}

const styles = StyleSheet.create({
    container: {},
});

export default primaryButton;