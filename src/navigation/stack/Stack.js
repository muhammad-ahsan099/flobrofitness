import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const AppStack = createNativeStackNavigator();
import Setup from '../../screens/Setup/Setup'
import UserDetail from '../../screens/userDetail/UserDetail'


// StackContainer
function StackContainer() {
  const options = {
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    headerShown: false,
  };

  return (
    <AppStack.Navigator initialRouteName={'Setup'}>
       <AppStack.Screen
        name="Setup"
        component={Setup}
        options={options}
      />
      <AppStack.Screen
        name="UserDetail"
        component={UserDetail}
        options={options}
      />
    </AppStack.Navigator>
  );
}
export default StackContainer;
