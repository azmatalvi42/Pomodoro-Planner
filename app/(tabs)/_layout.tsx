import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

{
  /*
The _layout.tsx file defines the tab navigation structure and applies it to all screens (e.g., index.tsx, explore.tsx) within its directory.
It is a crucial part of the navigation system in an Expo Router project, ensuring a consistent layout for related screens.
Customizations like tab bar styling, active colors, and haptic feedback can be added here. */
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    //Tabs is used to define the tab naviagtion structure
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint, //sets the color of active tab
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          //adjust the tab bar style for specific platforms
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      {/*Each <Tabs.Screen/> represents a tab in the navigation bar */}
      <Tabs.Screen
        name="index" //refers to index.tsx file
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pomodoroTimer"
        options={{
          title: "Pomodoro",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="clock.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="toDo"
        options={{
          title: "To Do",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="calendar" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
