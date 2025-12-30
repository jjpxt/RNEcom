import { FC } from "react";
import AppNavigator from "./app/navigation";
import AuthProvider from "./app/context/AuthProvider";
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

interface Props { }

const App: FC<Props> = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#bf50d809' }}>
        <AuthProvider>
          <AppNavigator />
        </AuthProvider>
      </SafeAreaView>
    </SafeAreaProvider>)
};

export default App;