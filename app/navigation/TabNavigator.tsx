import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cart from "../views/Cart";
import Profile from "../views/Profile";
import Fav from "../views/Fav";
import { createStaticNavigation } from "@react-navigation/native";
import { StyleSheet, Text } from "react-native";
import HomeStack from "./HomeNavigator";

const Tabs = createBottomTabNavigator({
    screens: {
        Home: {
            screen: HomeStack,
            options: {
                headerShown: false,
                tabBarIcon({ }) {
                    return <Text style={style.iconSize}
                    >🏠</Text>
                },
            }

        },
        Cart: {
            screen: Cart,
            options: {
                tabBarIcon({ }) {
                    return <Text style={style.iconSize}
                    >🛒</Text>
                }
            }
        },
        Fav: {
            screen: Fav,
            options: {
                tabBarIcon({ }) {
                    return <Text style={style.iconSize}
                    >❤️</Text>
                }
            }
        },
        Profile: {
            screen: Profile,
            options: {
                tabBarIcon({ }) {
                    return <Text style={style.iconSize}
                    >👤</Text>
                }
            }
        },
    },
    screenOptions: {
        tabBarLabelStyle: { fontSize: 16, fontWeight: "bold" },
        tabBarStyle: { backgroundColor: "#222222ff" },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#aaa",

    }
});

const style = StyleSheet.create({
    iconSize: {
        fontSize: 22,
        marginBottom: -4,
    }
})

const TabNavigator = createStaticNavigation(Tabs);
export default TabNavigator;