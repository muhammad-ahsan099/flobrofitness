import { View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Styles } from "./AppBarStyle";
import { LOGO } from "../../constant/Icons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Menu, MenuItem } from 'react-native-material-menu';
import { useDispatch, useSelector } from 'react-redux';
import { doLogout } from '../../redux/actions/AuthActions';
import { Text } from '../text/Text';
import { Touchable } from '../Touchable/Touchable';
import { useNavigation } from '@react-navigation/native';

const AppBar = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [visible, setVisible] = useState(false);
  const hideMenu = () => setVisible(false);
  const showMenu = () => {
    setVisible(true)
  };
  const logoutHandler = () => {
    hideMenu()
    setTimeout(() => {
      dispatch(doLogout())
    }, 500)
  }

  const userData = useSelector(state => state.AuthReducer.userData)

  return (
    <View style={Styles.container}>
      <View>
        <Touchable onPress={()=> navigation.openDrawer()}>
          <Image source={LOGO} style={Styles.navLogo} />
        </Touchable>
      </View>
      <Menu
        visible={visible}
        animationDuration={100}
        anchor={
          <TouchableOpacity style={Styles.peofileDiv} onPress={() => showMenu()}>
            <Text style={Styles.profileTxt}>{userData ? userData?.FirstName : "Test"}</Text>
            <AntDesign name='caretdown' size={8} color={'#000000'} />
          </TouchableOpacity>
        }
        onRequestClose={hideMenu}
        style={Styles.peofileDiv}
      >
        <MenuItem onPress={() => logoutHandler()}><AntDesign name='logout' size={16} color={'#000000'} /> <Text color={'black'} > Logout</Text></MenuItem>
      </Menu>
    </View>
  )
}

export default AppBar