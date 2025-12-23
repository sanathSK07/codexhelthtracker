import React from 'react';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { palette } from '@/theme/colors';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Tabs
        screenOptions={{
          headerStyle: { backgroundColor: palette.background },
          headerTintColor: '#fff',
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#9CA3AF',
          tabBarStyle: { backgroundColor: palette.surface, borderTopColor: '#1F2937' }
        }}
      >
        <Tabs.Screen
          name="dashboard"
          options={{
            title: 'Dashboard',
            tabBarIcon: ({ color, size }) => <Ionicons name="pulse" color={color} size={size} />
          }}
        />
        <Tabs.Screen
          name="logging"
          options={{
            title: 'Log',
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
          }}
        />
        <Tabs.Screen
          name="food-snap"
          options={{
            title: 'Food Snap',
            tabBarIcon: ({ color, size }) => <Ionicons name="camera" color={color} size={size} />
          }}
        />
        <Tabs.Screen
          name="coach"
          options={{
            title: 'Coach',
            tabBarIcon: ({ color, size }) => <Ionicons name="chatbubble-ellipses" color={color} size={size} />
          }}
        />
        <Tabs.Screen
          name="onboarding"
          options={{
            title: 'Onboarding',
            tabBarIcon: ({ color, size }) => <Ionicons name="person-circle" color={color} size={size} />
          }}
        />
      </Tabs>
    </>
  );
}
