import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingVertical: 2,
        paddingHorizontal: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#CCC',
        borderBottomWidth: 1
    },
    navLogo: {
        height: 70,
        width: 70,
    },
    sideLogo: {
        height: 35,
        width: 35,
    },
    peofileDiv: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 6,
    },
    profileTxt: {
        color: '#000000',
        marginHorizontal: 2,
        fontSize: 14,
        fontWeight: '600',
    }
})