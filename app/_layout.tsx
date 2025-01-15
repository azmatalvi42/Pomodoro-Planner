import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

{
  /*
This file:
Loads Fonts: Ensures custom fonts are loaded before rendering the app.
Manages Splash Screen: Prevents the splash screen from disappearing until everything is ready.
Applies Themes: Automatically uses light or dark mode based on the system theme.
Defines Navigation: Sets up a stack navigator with tabs and fallback screens.
Configures the Status Bar: Matches the status bar style with the app's theme. */
}
// Prevent the splash screen from auto-hiding before asset loading is complete.

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme(); //Gets the current color mode of the system, dark/light
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"), // load custom font
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync(); //Hides the splash screen when fonts are ready
    }
  }, [loaded]);

  if (!loaded) {
    return null; //If fonts aren’t loaded yet, the component returns null to show nothing until loading finishes.
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      {" "}
      {/*Wraps the app in ThemeProvider, applies DarkTheme if system in dark*/}
      <Stack>
        {" "}
        {/*Manages screen navigation */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />{" "}
        {/*(tabs) represents the main tabbed layout for app */}
        <Stack.Screen name="+not-found" /> {/*Fallback Screen*/}
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
