import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableWithoutFeedback, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TabItem } from '../components/TabItem';
import Dashboard from '../../screens/dashboard/Dashboard';
import { theme } from '../../theming';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import CheckIn from '../../screens/Checkin/Checkin';
import Fitness from '../../screens/Fitness/Fitness';
import Programs from '../../screens/Programs/Pragams';

const TabNavigator = createBottomTabNavigator();

export const MainTabNavigator = () => {
  const { bottom } = useSafeAreaInsets();

  return (
    <TabNavigator.Navigator

      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: { backgroundColor: theme.colors.primary, paddingTop: Platform.OS === 'android'? 0 : 10, height: 70 },
      }}
      tabBarOptions={{
        showLabel: false,
        style: {
          height: 64 + bottom,
          backgroundColor: '#fff',
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.20,
          shadowRadius: 1.41,
          elevation: 2,

        },
      }}
      initialRouteName="Program"
    >
      <TabNavigator.Screen
        name="Home"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarButton: ({ children, style, onPress, accessibilityRole, to: _to, ...rest }) => (
            <TouchableWithoutFeedback
              {...rest}
              accessibilityRole={accessibilityRole}
              onPressIn={(e) => {
                return onPress?.(e);
              }}
            >
              <View style={style}>{children}</View>
            </TouchableWithoutFeedback>
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={styles.tabBarLabel(focused)}>Departments</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <TabItem name="home" focused={focused} icon={'home'} label="Home" />
          ),
        }}
      />
      <TabNavigator.Screen
        name="Programs"
        component={Programs}
        options={{
          headerShown: false,
          tabBarButton: ({ children, style, onPress, accessibilityRole, to: _to, ...rest }) => (
            <TouchableWithoutFeedback
              {...rest}
              accessibilityRole={accessibilityRole}
              onPressIn={(e) => onPress?.(e)}
            >
              <View style={style}>{children}</View>
            </TouchableWithoutFeedback>
          ),

          tabBarIcon: ({ focused }) => (
            <TabItem name="home" focused={focused} icon={'book'} label="Programs" IconDirectory={AntDesign} />
          ),
        }}
      />
      <TabNavigator.Screen
        name="Check_in"
        component={CheckIn}
        options={{
          headerShown: false,
          tabBarButton: ({ children, style, onPress, accessibilityRole, to: _to, ...rest }) => (
            <TouchableWithoutFeedback
              {...rest}
              accessibilityRole={accessibilityRole}
              onPressIn={(e) => onPress?.(e)}
            >
              <View style={style}>{children}</View>
            </TouchableWithoutFeedback>
          ),

          tabBarIcon: ({ focused }) => (
            <TabItem name="home" focused={focused} icon={'clock'} label="Check in" />
          ),
        }}
      />
      <TabNavigator.Screen
        name="Fitness"
        component={Fitness}
        options={{
          tabBarButton: ({ children, style, onPress, accessibilityRole, to: _to, ...rest }) => (
            <TouchableWithoutFeedback
              {...rest}
              accessibilityRole={accessibilityRole}
              onPressIn={(e) => {
                return onPress?.(e);
              }}
            >
              <View style={style}>{children}</View>
            </TouchableWithoutFeedback>
          ),
          tabBarIcon: ({ focused }) => (
            <TabItem name="home" focused={focused} icon={'fitness-center'} label="Fitness" IconDirectory={MaterialIcons} />
          ),
        }}
      />
    </TabNavigator.Navigator>
  );
};
