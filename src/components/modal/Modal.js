import { View, Modal as ModalComponent, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { styles } from './ModalStyle';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { theme } from '../../theming';
import { Text } from '../text/Text';
import { useNavigation } from '@react-navigation/native';

export default function Modal({ open, setOpen }) {
    const navigation = useNavigation()
    const closeModal = () => {
        setOpen(false)
        setTimeout(() => {
            navigation.navigate('login')
        }, 500)
    }
    return (
        <View style={styles.container}>
            {/* EditInfo Modal  */}
            <ModalComponent animationType="fade" transparent={true} visible={open} onRequestClose={() => closeModal()}>
                <View style={styles.modalContainer}>
                    <View style={styles.addtoCartModal}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => closeModal()}
                            style={styles.crossBtn}>
                            <AntDesign name={'close'} size={30} color={theme.colors.primary} />
                        </TouchableOpacity>

                        <View style={{ backgroundColor: theme.colors.primary, width: 50, borderRadius: 50, height: 50, alignItems: 'center', justifyContent: 'center' }}>
                            <AntDesign name={'check'} size={26} color={theme.colors.white} />
                        </View>
                        <Text style={styles.modalText}>
                            {'You have successfully verified the account!'}
                        </Text>
                        {/* <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => {
                                setOpen(false);
                            }}
                            style={styles.dashboardBtn}>
                            <Text color='white' size={16} weight={'medium'}>Go to Dashbaord</Text>
                        </TouchableOpacity> */}
                    </View>
                </View>
            </ModalComponent>
        </View>
    )
}