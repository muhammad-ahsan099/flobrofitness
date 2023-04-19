import { View, StyleSheet, Platform } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox';
import { theme } from '../../theming';
import { Text } from '../text/Text';
import { Touchable } from '../Touchable/Touchable';

export default function CustomCheckbox({ label, check, setCheck }) {
    return (
        <Touchable style={styles.container} onPress={()=> setCheck(!check)}>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    boxType={'square'}
                    tintColor={theme.colors.switchOffColor}
                    onFillColor={'#fff'}
                    onTintColor={theme.colors.primary}
                    tintColors={{ true: theme.colors.primary, false: theme.colors.switchOffColor }}
                    onCheckColor={theme.colors.primary}
                    lineWidth={2}
                    style={styles.checkbox}
                    value={check}
                    // onValueChange={() => setCheck(!check)}
                />
            </View>
            <Text color='lightPrimary' size={15} weight={'normal'}>{label}</Text>
        </Touchable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {

    },
    checkboxContainer: {
        marginLeft: 2,
        marginRight: Platform.OS === 'ios' ? 6 : 12,
        width: 20,
        height: 20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    checkbox: {
        backgroundColor: '#fff',
        width: 20,
        height: 20
    }
})
