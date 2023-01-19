import React from 'react'
import { theme, ThemeProvider } from './src/theming';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import Subscription from './src/screens/subscription/Subscription';
// import Setup from './src/screens/Setup/Setup'
import { Provider } from 'react-redux';
import Store from './src/config/Store';
import LogIn from './src/screens/login/LogIn';
import Signup from './src/screens/signup/Signup';
import UserDetail from './src/screens/userDetail/UserDetail';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigation/authStack/AuthStack';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={Store}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <AuthStack />
            {/* <Setup /> */}
            {/* <LogIn /> */}
            {/* <Signup /> */}
            {/* <UserDetail /> */}
          </NavigationContainer>
        </ThemeProvider>
      </Provider>
    </SafeAreaProvider>
  )
}

export default App