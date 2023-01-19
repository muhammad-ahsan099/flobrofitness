import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const AppStack = createNativeStackNavigator();

// StackContainer
function StackContainer() {
  const options = {
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    headerShown: false,
  };

  return (
    <AppStack.Navigator initialRouteName={'DecisionLoader'}>
       <AppStack.Screen
        name="DecisionLoader"
        component={DecisionLoader}
        options={options}
      />
      <AppStack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={options}
      />
    </AppStack.Navigator>
  );
}
export default StackContainer;
