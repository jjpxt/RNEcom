import { FC } from "react";
import AppNavigator from "./app/navigation";
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Providers from "./app/context/Providers";

interface Props { }

const App: FC<Props> = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#bf50d809' }}>
        <Providers>
          <AppNavigator />
        </Providers>
      </SafeAreaView>
    </SafeAreaProvider>)
};

export default App;