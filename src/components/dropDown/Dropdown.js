import React, { useRef, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import Modal from "react-native-modal";
import { Touchable } from '../Touchable/Touchable';
import { useHeaderHeight } from '../../customHooks/useHeaderHeight';
import { Text } from '../text/Text';
import { theme } from '../../theming';



export function Dropdown() {
    const [visible, setVisible] = useState(false);
    const { statusBarInset } = useHeaderHeight()
    const toggleModal = () => {
        setVisible(!visible)
    };

    return (
        <View style={styles.container} >
            <Touchable
                style={styles.header}
                activeOpacity={0.8}
                onPress={() => toggleModal()}
            >
                <Text color='white' size={14} weight='medium'>Logout</Text>
                {/* <Arrow /> */}
            </Touchable>
            <Modal
                animationIn='fadeIn'
                animationOut='fadeOut'
                isVisible={visible}
                hasBackdrop={true}
                backdropColor={'transparent'}
                backdropOpacity={0}
                onBackdropPress={() => setVisible(false)}
                style={styles.modal}
            >
                <View style={[styles.menuContainer, {marginTop: statusBarInset + 35}]}>
                    <View style={[styles.menu]} >
                        <Touchable style={styles.menuBox} activeOpacity={0.8} onPress={() => { setVisible(false) }}>
                            {/* <Chat /> */}
                            <Text size={16} weight={'medium'} color={'dropDownText'} style={styles.labelStyle}>Logout</Text>
                        </Touchable>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        zIndex: 1000,
    },
    labelStyle: {
        marginLeft: 8
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 14,
        height: 35,
        width: 80,
        borderRadius: 8,
        backgroundColor: theme.colors.lightPrimary,
        alignItems: 'center',

    },
    modal: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        marginHorizontal: 12
        
    },
    menuContainer: {
        width: 135,
        height: 30,
        borderRadius: 8,
    },
    menuBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    picker: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    warningMessage: {
        minHeight: 18,
        alignItems: 'flex-end',
    },
    dropDownContainer: {
        borderWidth: 0,
        width: 80,
        backgroundColor: theme.colors.lightPrimary

    },
    dropdown: {
        width: 80,
        marginHorizontal: 0,
        marginVertical: 0,
        color: '#fff',
        borderRadius: 8,
        // backgroundColor: theme.colors.lightPrimary
        backgroundColor:'pink'
    },
    placeholderStyles: {
        color: "#fff",
    },
    menu: {
        zIndex: 1000,
        width: 115,
        height: 40,
        borderWidth: 0,
        backgroundColor: "#fff",
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 10

    }
});
