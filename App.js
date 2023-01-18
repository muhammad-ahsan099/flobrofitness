import React from 'react'
import Setup from './src/screens/Setup/Setup'
import { theme, ThemeProvider } from './src/theming';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LogIn from './src/screens/login/LogIn';
import UserDetail from './src/screens/userDetail/UserDetail';

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        {/* <Setup /> */}
        {/* <LogIn /> */}
        <UserDetail />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default App