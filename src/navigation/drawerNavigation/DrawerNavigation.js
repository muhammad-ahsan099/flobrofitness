import React, {useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useWindowDimensions} from 'react-native';
import StackContainer from '../stack/Stack';

import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import DrawerContent from '../../components/drawerContent/DrawerContent';
import { theme } from '../../theming';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../../redux/actions/AuthActions';

const Drawer = createDrawerNavigator();
export default function DrawerNavigation() {
  const [loading, setLoading] = React.useState(true);
  const dimensions = useWindowDimensions();
  const dispatch = useDispatch()
  const isUserLoggedIn = useSelector(state => state.AuthReducer.isUserLoggedIn)
  const userId = useSelector(state => state.AuthReducer.userId)
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        drawerType: dimensions.width >= 768 ? 'front' : 'front',
        headerShown: false,
        drawerStyle: {
          backgroundColor: theme.colors.primary,
          // width: '100%',
        },
      }}>
      <Drawer.Screen
        name="StackContainer"
        component={StackContainer}
        options={({route}) => {
          const routeName = getFocusedRouteNameFromRoute(route);
          // if (routeName === 'Setup' || routeName === 'UserDetail' || routeName === 'Subscription' || routeName === 'SubscriptionDetail') {
            return {swipeEnabled: false};
          // }
        }}
      />
    </Drawer.Navigator>
  );
}
