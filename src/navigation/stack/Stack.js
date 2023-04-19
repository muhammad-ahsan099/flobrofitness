import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const AppStack = createNativeStackNavigator();
import Setup from '../../screens/Setup/Setup'
import UserDetail from '../../screens/userDetail/UserDetail'
import Subscription from '../../screens/subscription/Subscription';
import SubscriptionDetail from '../../screens/subscription/SubscriptionDetail';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../../redux/actions/AuthActions';
import { useState } from 'react';
import Dashboard from '../../screens/dashboard/Dashboard';
import { MainTabNavigator } from '../bottomNavigation/BottomTabs';
import CardInfo from '../../screens/subscription/CardInfo';


// StackContainer
function StackContainer() {
  const [loading, setLoading] = useState(false)
  const userId = useSelector(state => state.AuthReducer.userId)
  const user = useSelector(state => state.AuthReducer.userData)
  const isUserLoggedIn = useSelector(state => state.AuthReducer.isUserLoggedIn)
  const dispatch = useDispatch();

  const termsScreen = user?.IsAcceptTerms
  const detailScreen = user?.IsSetPersoanlDetail
  const profileScreen = user?.IsProfileSetUp
  const dashboard = user?.IsProfileSetUp && user.MembershipId !== null

  let initialRoute = null;
    if (!loading && user !== null) {
      initialRoute = dashboard ? 'BottomTabs' : !termsScreen ? 'Setup' : !detailScreen ? 'UserDetail' : !profileScreen ? 'Subscription' : 'BottomTabs'
    }

  // const route = 
  const options = {
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    headerShown: false,
    headerLeft: null,
    gestureEnabled: false,
  };

  return (
    <AppStack.Navigator screenOptions={{headerShown: false}} initialRouteName={initialRoute}>
       
       <AppStack.Screen
        name="BottomTabs"
        component={MainTabNavigator}
        options={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerShown: false,
        }}
      />

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
      <AppStack.Screen
        name="Subscription"
        component={Subscription}
        options={options}
      />
      <AppStack.Screen
        name="SubscriptionDetail"
        component={SubscriptionDetail}
        options={options}
      />
      <AppStack.Screen
        name="CardInfo"
        component={CardInfo}
        options={options}
      />
    </AppStack.Navigator>
  );
}
export default StackContainer;
