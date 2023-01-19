import { Image, ImageBackground, ScrollView, StatusBar, View } from 'react-native'
import React from 'react'
import { Screen } from '../../components/screen/Screen'
import { Text } from '../../components/text/Text'
import { TextInput } from '../../components/textInput/TextInput'
import { Touchable } from '../../components/Touchable/Touchable'
import { styles } from './SignupStyle'
import { SIGNUP_BG, LOGO } from '../../constant/Icons'
import { theme } from '../../theming'
import Icon from 'react-native-vector-icons/FontAwesome'
import { UseSignup } from './UseSignup'

const SignUp = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'light-content'}
      />
      <ImageBackground source={SIGNUP_BG} resizeMode="cover" style={styles.image}>
        <View
          style={styles.container}
        >
          <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}} showsVerticalScrollIndicator={false}>
            <View style={styles.loginBox}>
              <Image source={LOGO} resizeMode='cover' style={styles.logo} />
              <View style={{ alignItems: 'flex-start', width: '100%' }}>
                <Text color='primary' size={16} weight={'bold'} >Create a FREE Account Today!</Text>
                <TextInput
                  placeholder="First Name"
                  placeholderTextColor={theme.colors.lightGrey}
                  autoCapitalize="none"
                  autoCorrect={false}
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
                  value={values.firstName} 
                  onChangeText={handleChange('firstName')}
                />
                <TextInput
                  placeholder="Last Name"
                  placeholderTextColor={theme.colors.lightGrey}
                  autoCapitalize="none"
                  autoCorrect={false}
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
                  value={values.lastName} 
                  onChangeText={handleChange('lastName')}
                />
                <TextInput
                  placeholder="User ID"
                  placeholderTextColor={theme.colors.lightGrey}
                  autoCapitalize="none"
                  autoCorrect={false}
                  containerStyle={styles.textInput}
                  style={[
                    styles.textInputText,
                  ]}
                  textContentType="username"
                  returnKeyType="next"
                  after={
                    <Icon name="user" size={26} color="#495057" />
                  }
                  value={values.userId} 
                  onChangeText={handleChange('userId')}
                />
                <TextInput
                  placeholder="Email"
                  placeholderTextColor={theme.colors.lightGrey}
                  autoCapitalize="none"
                  autoCorrect={false}
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
                  value={values.email} 
                  onChangeText={handleChange('email')}
                />
                <TextInput
                  placeholder="***********"
                  placeholderTextColor={theme.colors.lightGrey}
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={true}
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
                  value={values.password} 
                  onChangeText={handleChange('password')}
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
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  )
}

export default SignUp
