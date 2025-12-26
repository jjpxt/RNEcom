import { FC, useEffect } from "react";
import AuthNavigator from "./app/navigation/AuthNavigator";
import { DefaultTheme, Theme } from "@react-navigation/native";
import axios from "axios";
import { API_URL } from "@env";

interface Props { }

const AppTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#FFF",
  },
};

const App: FC<Props> = () => {
  useEffect(() => {
    const fetchServerNote = async () => {
      try {
        const res = await axios.get(API_URL);
        console.log("server note:", res.data);
      } catch (err: any) {
        console.error("request error:", err.message);
        if (err.code === "ERR_NETWORK") {
          console.error("check if server is running");
        }
      }
    };

    if (!API_URL) {
      console.error("API_URL is not defined");
      return;
    }

    fetchServerNote();
  }, []);

  return <AuthNavigator theme={AppTheme} />;
};

export default App;