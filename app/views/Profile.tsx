import { FC } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../context/AuthProvider';

interface Props { }

const Profile: FC<Props> = () => {
    const {logout} = useAuth()
    return <View style={styles.container}>
        <Text>
            Profile
        </Text>
        <Pressable onPress={logout}>
            <Text>Log Out</Text>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    container: {},
});

export default Profile;