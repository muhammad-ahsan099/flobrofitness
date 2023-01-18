import React from 'react'
import Setup from './src/screens/Setup/Setup'
import { SafeAreaView } from 'react-native'
import { theme, ThemeProvider } from './src/theming';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import LogIn from './src/screens/login/LogIn';

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Setup />
        {/* <LogIn /> */}
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default App