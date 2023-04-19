import { View, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { Screen } from '../../components/screen/Screen'
import { theme } from '../../theming'
import AppBar from '../../components/appBar/AppBar'
import { Text } from '../../components/text/Text'

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Screen
        scroll
        safeArea
        statusbar
        contentContainerStyle={styles.screen}
      >
        <AppBar />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'}}>
        <Text color='primary' size={24}>Welcome to Home</Text>
        </View>
      </Screen>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  screen: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: theme.colors.white,
  },
})