import { Image, ImageBackground, View } from 'react-native'
import React from 'react'
import { Screen } from '../../components/screen/Screen'
import { Text } from '../../components/text/Text'
import { TextInput } from '../../components/textInput/TextInput'
import { Touchable } from '../../components/Touchable/Touchable'
import { styles } from './SignupStyle'
import { SIGNUP_BG, LOGO } from '../../constant/Icons'
import { theme } from '../../theming'
import Icon from 'react-native-vector-icons/FontAwesome'

const Signup = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={SIGNUP_BG} resizeMode="cover" style={styles.image}>
        <Screen
          scroll
          contentContainerStyle={styles.screen}
          keyboardBehavior={'none'}
        >
          <View style={styles.loginBox}>
            <Image source={LOGO} resizeMode='cover' style={styles.logo} />
            <View style={{ alignItems: 'flex-start', width: '100%' }}>
              <Text color='primary' size={16} weight={'bold'} >Create a FREE Account Today!</Text>
              <TextInput
                placeholder="First Name"
                placeholderTextColor={theme.colors.lightGrey}
                autoCapitalize="none"
                autoCorrect={false}
                // value={values.email}
                // onChangeText={handleChange('email')}
                // onBlur={handleBlur('email')}
                containerStyle={styles.textInput}
                style={[
                  styles.textInputText,
                ]}
                textContentType="username"
                autoComplete="email"
                returnKeyType="next"
                after={
                  <Icon name="user" size={26} color="#495057" />
                }
              />
              <TextInput
                placeholder="Last Name"
                placeholderTextColor={theme.colors.lightGrey}
                autoCapitalize="none"
                autoCorrect={false}
                // value={values.email}
                // onChangeText={handleChange('email')}
                // onBlur={handleBlur('email')}
                containerStyle={styles.textInput}
                style={[
                  styles.textInputText,
                ]}
                textContentType="username"
                autoComplete="email"
                returnKeyType="next"
                after={
                  <Icon name="user" size={26} color="#495057" />
                }
              />
              <TextInput
                placeholder="User ID"
                placeholderTextColor={theme.colors.lightGrey}
                autoCapitalize="none"
                autoCorrect={false}
                // value={values.email}
                // onChangeText={handleChange('email')}
                // onBlur={handleBlur('email')}
                containerStyle={styles.textInput}
                style={[
                  styles.textInputText,
                ]}
                textContentType="username"
                autoComplete="email"
                returnKeyType="next"
                after={
                  <Icon name="user" size={26} color="#495057" />
                }
              />
              <TextInput
                placeholder="Email"
                placeholderTextColor={theme.colors.lightGrey}
                autoCapitalize="none"
                autoCorrect={false}
                // value={values.email}
                // onChangeText={handleChange('email')}
                // onBlur={handleBlur('email')}
                containerStyle={styles.textInput}
                style={[
                  styles.textInputText,
                ]}
                textContentType="username"
                autoComplete="email"
                returnKeyType="next"
                after={
                  <Icon name="envelope" size={22} color="#495057" />
                }
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
                containerStyle={styles.textInput}
                style={[
                  styles.textInputText,
                ]}
                textContentType="password"
                autoComplete="password"
                returnKeyType="done"
                returnKeyLabel="Signup"
                enablesReturnKeyAutomatically={true}
                after={
                  <Icon name="lock" size={26} color="#495057" />
                }
              />
            </View>
            <Touchable style={styles.registerBtn}>
              <Text style={styles.registerBtnText}>Register</Text>
            </Touchable>

            <Text color='primary' size={16} weight='medium' style={styles.orText}>OR</Text>

            <Touchable style={styles.loginBtn}>
              <Text style={styles.loginBtnText}>Login</Text>
            </Touchable>
          </View>
        </Screen>
      </ImageBackground>
    </View>
  )
}

export default Signup
