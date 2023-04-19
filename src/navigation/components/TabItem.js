import React, { ReactNode } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { TabLabel } from './TabLabel';
import { theme } from '../../theming';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


export const TabItem = ({ focused, icon, image, name, label, IconDirectory }) => {
  return (
    <View style={[styles.itemContainer]}>
      {
        image ?
          <Image source={image} style={[styles.img, focused && styles.focus]} />
          : IconDirectory ?
          <IconDirectory name={icon} size={26} color={focused ? theme.colors.white : theme.colors.white} />
          :
          <Icon name={icon} size={24} color={focused ? theme.colors.white : theme.colors.white} />
      }
      {label ? <TabLabel focused={focused} name={label} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  img: {
    height: 20,
    width: 20,
    marginBottom: 2
  },
  focus: {
    // tintColor: theme.colors.secondary,
    color: theme.colors.secondary
  }
});
