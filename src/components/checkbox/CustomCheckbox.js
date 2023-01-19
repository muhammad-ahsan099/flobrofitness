import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox';
import { theme } from '../../theming';
import { Text } from '../text/Text';

export default function CustomCheckbox({ label }) {
    const [checkbox, setCheckbox] = useState(false);

    return (
        <View style={styles.container}>
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
                    value={checkbox}
                    onValueChange={() => setCheckbox(!checkbox)}
                />
            </View>
            <Text color='lightPrimary' size={15} weight={'normal'}>{label}</Text>
        </View>
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
        marginRight: 6,
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
