import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "@views";

const Stack = createNativeStackNavigator();

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Inicio" component={HomeScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}

export { RootNavigator }