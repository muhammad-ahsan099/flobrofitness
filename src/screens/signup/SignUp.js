import { View, Text } from 'react-native'
import React from 'react'
import { Screen } from '../../components/screen/Screen'
import { styles } from './SignUpStyle'

const SignUp = () => {
  return (
    <Screen
      statusBarStyle="light"
      scroll
      safeArea
      style={{ backgroundColor: 'white' }}
      contentContainerStyle={styles.screen}
    >
      <Text>Sign Up</Text>
    </Screen>
  )
}

export default SignUp