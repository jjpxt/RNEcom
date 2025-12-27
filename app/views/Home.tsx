import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackScreenProps } from "@react-navigation/stack"
import { AuthStackNavigator } from '../navigation/AuthNavigator';

type Props = StackScreenProps<AuthStackNavigator, 'Home'>

const Home: FC<Props> = ({ route }) => {
    const { email, name } = route.params.profile
    return <View style={styles.container}>
        <Text>Home</Text>
        <Text>Profile {name}</Text>
        <Text>Profile {email}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {},
});

export default Home;