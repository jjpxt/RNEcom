import { FC } from "react";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "./app/views/SignIn";
import SignUp from "./app/views/SignUp";

interface Props { }

export type AuthStackNavigator = {
  SignIn: undefined,
  SignUp: undefined
}

const AuthStack = createNativeStackNavigator<AuthStackNavigator>({
  initialRouteName: "SignIn",
  screens: {
    SignIn: {
      screen: SignIn,
    },
    SignUp: {
      screen: SignUp,
    },
  },
});

const Navigation = createStaticNavigation(AuthStack);

const App: FC<Props> = () => {
  return <Navigation />;
};

export default App;