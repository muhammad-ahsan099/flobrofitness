import { View, Text } from 'react-native'
import React from 'react'
import { Screen } from '../../components/screen/Screen'
import { styles } from './LoginStyle'

const LogIn = () => {
  return (
    <Screen
      statusBarStyle="light"
      scroll
      safeArea
      style={{ backgroundColor: 'white' }}
      contentContainerStyle={styles.screen}
    >
      <Text>LogIn</Text>
    </Screen>
  )
}

export default LogIn