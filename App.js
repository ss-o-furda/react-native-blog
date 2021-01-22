import React, { useState } from "react";
import { LogBox, View } from "react-native";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";
import { bootstrap } from "./src/bootstrap";
import store from "./src/store";
import { AppNavigation } from "./src/navigation/AppNavigation";
LogBox.ignoreLogs([
  "Your project is accessing the following APIs from a deprecated global rather than a module import: Constants (expo-constants).",
]);

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        onFinish={(_) => setIsReady(true)}
        onError={(err) => console.error(err)}
        startAsync={bootstrap}
      />
    );
  }
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
