import { Image, ImageBackground, View } from 'react-native'
import React from 'react'
import { Screen } from '../../components/screen/Screen'
import { Text } from '../../components/text/Text'
import { TextInput } from '../../components/textInput/TextInput'
import { Touchable } from '../../components/Touchable/Touchable'
import { styles } from './LoginStyle'
import { LOGIN_BG, LOGO } from '../../constant/Icons'
import { theme } from '../../theming'

const LogIn = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={LOGIN_BG} resizeMode="cover" style={styles.image}>
        <Screen
          scroll
          contentContainerStyle={styles.screen}
        >
          <View style={styles.loginBox}>
            <Image source={LOGO} resizeMode='cover' style={styles.logo} />
            <View style={{ alignItems: 'flex-start', width: '100%' }}>
              <Text color='primary' size={16} weight={'bold'} >Login To Your Account</Text>
              <TextInput
                placeholder="Input your email here"
                placeholderTextColor={theme.colors.lightGrey}
                autoCapitalize="none"
                autoCorrect={false}
                // value={values.email}
                // onChangeText={handleChange('email')}
                // onBlur={handleBlur('email')}
                style={[
                  styles.textInput,
                  styles.textInputText,
                ]}
                textContentType="username"
                autoComplete="email"
                returnKeyType="next"
              />
              <TextInput
                placeholder="***********"
                placeholderTextColor={theme.colors.lightGrey}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                // value={values.password}
                // onChangeText={handleChange('password')}
                // onBlur={handleBlur('password')}
                style={[
                  styles.textInputText,
                  styles.textInput,
                ]}
                textContentType="password"
                autoComplete="password"
                returnKeyType="done"
                returnKeyLabel="Login"
                enablesReturnKeyAutomatically={true}
              />
              <View style={styles.forgotPass}>
                <Text>Remember</Text>
                <Touchable>
                  <Text size={15} color="lightGrey">Forgot Password?</Text>
                </Touchable>
              </View>
            </View>
            <Touchable style={styles.loginBtn}>
              <Text style={styles.loginBtnText}>Login</Text>
            </Touchable>

            <Text color='primary' size={16} weight='medium' style={styles.orText}>OR</Text>
            
            <Touchable style={styles.registerBtn}>
              <Text style={styles.registerBtnText}>Register</Text>
            </Touchable>
          </View>
        </Screen>
      </ImageBackground>
    </View>
  )
}

export default LogIn