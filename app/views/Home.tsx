import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackScreenProps } from "@react-navigation/stack"
import { AuthStackNavigator } from '../navigation/AuthNavigator';
import { useAuth } from '../context/AuthProvider';
// import { AuthContext } from '../context/AuthProvider';

type Props = StackScreenProps<AuthStackNavigator, 'Home'>

const Home: FC<Props> = ({ /*route*/ }) => {
    const authContext = useAuth()

    return <View style={styles.container}>
        <Text>Home</Text>
        <Text>Profile {authContext.profile?.name}</Text>
        <Text>Profile {authContext.profile?.email}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {},
});

export default Home;