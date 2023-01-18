import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Styles } from "./AppBarStyle";
import { LOGO } from "../../constant/Icons";
import AntDesign from "react-native-vector-icons/AntDesign";

const AppBar = () => {
  return (
    <View style={Styles.container}>
      <View>
        <Image source={LOGO} style={Styles.navLogo} />
      </View>
      <View style={Styles.peofileDiv}>
        <Image source={LOGO} style={Styles.sideLogo} />
        <TouchableOpacity>
          <Text style={Styles.profileTxt}>Username</Text>
        </TouchableOpacity>
        <AntDesign name='caretdown' size={8} color={'#000000'} />
      </View>
    </View>
  )
}

export default AppBar