import 'react-native-gesture-handler';
import React from 'react'
// import Setup from './src/screens/Setup/Setup'
import { theme, ThemeProvider } from './src/theming';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Store from './src/config/Store';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigation/authStack/AuthStack';
import Navigation from './src/navigation/Navigation';
import { LogBox } from "react-native";
import { StripeProvider, initStripe } from '@stripe/stripe-react-native';
import config from './src/config/config';


LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
  "ColorPropType will be removed",
])
const publishableKey = config.STRIPE_KEY

const App = () => {
  React.useEffect(() => {
    initStripe({
      publishableKey: publishableKey,
      merchantIdentifier:"merchant.com.flobrofitness"
    });
  }, []);
  return (
    <SafeAreaProvider>
      <Provider store={Store}>
        <ThemeProvider theme={theme}>
          <StripeProvider
            publishableKey={publishableKey}
            merchantIdentifier="merchant.com.flobrofitness"
            >
            <NavigationContainer>
              <Navigation />
            </NavigationContainer>
          </StripeProvider>
        </ThemeProvider>
      </Provider>
    </SafeAreaProvider>
  )
}

export default App