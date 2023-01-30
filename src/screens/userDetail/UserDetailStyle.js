import { StyleSheet } from "react-native";
import { COLORS } from "../../assests/colors/Colors";
import { theme } from "../../theming";

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
    },
    screen: {
        justifyContent: 'space-between',
    },
    mainContainer: {
        paddingHorizontal: 12,
        paddingVertical: 10,
    },
    genderDiv: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 15,
    },
    genderHeading: {
        color: COLORS.black,
        fontSize: 16,
        fontWeight: '800',
        marginTop: 4
    },
    genderHeadingTxt: {
        fontSize: 14,
        fontWeight: '500',
        color: COLORS.blue,
    },
    genderBtnContainer: {
        borderColor: '#CCC',
        borderWidth: 2,
        paddingHorizontal: 2,
        paddingVertical: 2,
        borderRadius: 20,
        flexDirection: 'row',
        marginVertical: 10
    },
    femaleBtn: {
        backgroundColor: COLORS.blue,
        height: 40,
        width: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    femaleBtnTxt: {
        color: COLORS.white,
        fontSize: 14,
        fontWeight: '500',
    },
    maleBtn: {
        backgroundColor: COLORS.white,
        height: 40,
        width: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    maleBtnTxt: {
        color: COLORS.black,
        fontSize: 14,
        fontWeight: '500',
    },
    rangesDiv: {
        width: '80%',
        marginTop: 2,
        marginBottom: 10
    },
    bodyBtnContainer: {
        width: '100%',
        paddingHorizontal: 2,
        paddingVertical: 2,
        flexDirection: 'row',
        marginVertical: 10,
        // justifyContent: 'center',
        justifyContent: 'space-evenly',
    },
    bodyBtn: {
        backgroundColor: COLORS.blue,
        height: 40,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 2,
        borderRadius: 3,
        borderColor: theme.colors.primary,
        borderWidth: 2,
    },
    bodyBtnTxt: {
        color: COLORS.white,
        fontSize: 14,
        fontWeight: '500',
    },
    singleBodyBtn: {
        backgroundColor: COLORS.white,
        height: 40,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: theme.colors.primary,
        borderWidth: 2,
        marginHorizontal: 2,
        borderRadius: 3
    },
    singleBodyBtnTxt: {
        borderColor: theme.colors.primary,
        fontSize: 14,
        fontWeight: '500',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: COLORS.black
    },
    textInput: {
        alignItems: 'center',
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 0,
        borderWidth: 1,
        borderColor: theme.colors.borderColor,
        marginVertical: 10,
        marginHorizontal: 6
    },
    textInputText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#131e22',
    },
    inputLarge: {
        height: 150,
        marginHorizontal: 6,
        marginVertical: 12,
        borderWidth: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: theme.colors.borderColor,
    },
    continueBtn: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 12,
    },
    saveBtn: {
        paddingHorizontal: 20,
        backgroundColor: theme.colors.primary,
        height: 40,
        borderRadius: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: theme.colors.primary,
    }
})