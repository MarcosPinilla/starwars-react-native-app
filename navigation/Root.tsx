import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, FilmScreen } from "@views";

type RootStackParamList = {
  Home: {};
  Film: { film: any };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <RootStack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerBackTitleVisible: false }}
    >
      <RootStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Star Wars Movies" }}
      ></RootStack.Screen>
      <RootStack.Screen
        name="Film"
        component={FilmScreen}
        options={({ route }) => ({ title: route.params.film.title })}
      ></RootStack.Screen>
    </RootStack.Navigator>
  );
}

export { RootNavigator };
