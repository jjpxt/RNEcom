import { FC } from "react";
import AppNavigator from "./app/navigation";
import AuthProvider from "./app/context/AuthProvider";
// import { DefaultTheme, Theme } from "@react-navigation/native";
// import axios from "axios";
// import { API_URL } from "@env";

interface Props { }

// const AppTheme: Theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     background: "#FFF",
//   },
// };

const App: FC<Props> = () => {
  return <AuthProvider>
    <AppNavigator />
  </AuthProvider>
};

export default App;