import { Image, ImageBackground, StatusBar, View } from 'react-native'
import React from 'react'
import { Screen } from '../../components/screen/Screen'
import { Text } from '../../components/text/Text'
import { TextInput } from '../../components/textInput/TextInput'
import { Touchable } from '../../components/Touchable/Touchable'
import { styles } from './LoginStyle'
import { LOGIN_BG, LOGO } from '../../constant/Icons'
import { theme } from '../../theming'
import CustomCheckbox from '../../components/checkbox/CustomCheckbox'
import Icon from 'react-native-vector-icons/FontAwesome';


const LogIn = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'light-content'}
      />
      <ImageBackground source={LOGIN_BG} resizeMode="cover" style={styles.image}>
        <Screen
          scroll
          contentContainerStyle={styles.screen}
          keyboardBehavior={'padding'}
        >
          <View style={styles.loginBox}>
            <Image source={LOGO} resizeMode='cover' style={styles.logo} />
            <View style={{ alignItems: 'flex-start', width: '100%' }}>
              <Text color='primary' size={16} weight={'bold'} >Login To Your Account</Text>
              <TextInput
                placeholder="Email Or User ID"
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
                returnKeyLabel="Login"
                enablesReturnKeyAutomatically={true}
                after={
                  <Icon name="lock" size={26} color="#495057" />
                }
              />
              <View style={styles.forgotPass}>
                <CustomCheckbox label={'Remember'} />
                <Touchable>
                  <Text size={15} weight={'medium'} color="lightGrey">Forgot Password?</Text>
                </Touchable>
              </View>
            </View>
            <Touchable style={styles.loginBtn} onPress={()=> navigation.navigate('signup')}>
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