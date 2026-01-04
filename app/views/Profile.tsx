import { FC } from 'react';
import { Image, Pressable, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useAuth } from '../context/AuthProvider';
import { useNavigation } from '@react-navigation/native';

const Profile: FC = () => {
    const { profile, logout } = useAuth(); 
    const navigation = useNavigation<any>();

    if (!profile) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>No user logged in</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.customHeader}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                >
                    <Text style={styles.backText}>←</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Profile</Text>
                <View style={{ width: 40 }} />
            </View>

            <View style={styles.content}>
                <View style={styles.avatarContainer}>
                    <Image
                        source={require("../source/cara.jpg")} 
                        style={styles.avatar}
                        resizeMode="cover"
                    />
                </View>

                <Text style={styles.userName}>
                    {profile?.name || 'User'}
                </Text>
                <Text style={styles.userEmail}>
                    {profile?.email || 'No email'}
                </Text>

                <Pressable onPress={logout} style={styles.logoutButton}>
                    <Text style={styles.logoutText}>Log Out</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    customHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        paddingTop: 50,
        backgroundColor: '#fff',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    backButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backText: {
        fontSize: 28,
        color: '#333',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        flex: 1,
        textAlign: 'center',
        marginRight: -40,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 40,
    },
    avatarContainer: {
        width: 220,
        height: 220,
        borderRadius: 110,
        overflow: 'hidden',
        borderWidth: 4,
        borderColor: '#bf50d8',
        elevation: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
    },
    avatar: {
        width: '100%',
        height: '100%',
    },
    userName: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginTop: 20,
    },
    userEmail: {
        fontSize: 16,
        color: '#666',
        marginTop: 8,
        marginBottom: 40,
    },
    logoutButton: {
        backgroundColor: '#e74c3c',
        paddingHorizontal: 40,
        paddingVertical: 14,
        borderRadius: 30,
        elevation: 4,
    },
    logoutText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    errorText: {
        fontSize: 18,
        color: '#e74c3c',
        marginTop: 50,
    },
});

export default Profile;