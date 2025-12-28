import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cart from "../views/Cart";
import Home from "../views/Home";
import Profile from "../views/Profile";
import Fav from "../views/Fav";
import { createStaticNavigation } from "@react-navigation/native";
import { Text } from "react-native";


const Tabs = createBottomTabNavigator({
    screens: {
        Home: {
            screen: Home,
            options: {
                tabBarIcon({ }) {
                    return <Text>H</Text>
                },
                tabBarBadge: 9
            }

        },
        Cart: {
            screen: Cart,
            options: {
                tabBarIcon({ }) {
                    return <Text>C</Text>
                }
            }
        },
        Fav: {
            screen: Fav,
            options: {
                tabBarIcon({ }) {
                    return <Text>F</Text>
                }
            }
        },
        Profile: {
            screen: Profile,
            options: {
                tabBarIcon({ }) {
                    return <Text>P</Text>
                }
            }
        },
    }
});

const TabNavigator = createStaticNavigation(Tabs);
export default TabNavigator;