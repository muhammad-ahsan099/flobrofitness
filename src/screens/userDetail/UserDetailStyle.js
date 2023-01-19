import { StyleSheet } from "react-native";
import { COLORS } from "../../assests/colors/Colors";

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    mainContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
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
        paddingBottom: 4,
    },
    femaleBtnTxt: {
        color: COLORS.white,
        fontSize: 14,
        fontWeight: '500'
    },
    maleBtn: {
        backgroundColor: COLORS.white,
        height: 40,
        width: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingBottom: 4,
    },
    maleBtnTxt: {
        color: COLORS.black,
        fontSize: 14,
        fontWeight: '600'
    },
    rangesDiv: {
        width: '80%',
        marginTop: 2,
        marginBottom: 10
    },
    bodyBtnContainer: {
        paddingHorizontal: 2,
        paddingVertical: 2,
        flexDirection: 'row',
        marginVertical: 10,
    },
    bodyBtn: {
        backgroundColor: COLORS.blue,
        height: 40,
        width: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 4,
        marginHorizontal: 2
    },
    bodyBtnTxt: {
        color: COLORS.white,
        fontSize: 14,
        fontWeight: '500'
    },
    singleBodyBtn: {
        backgroundColor: COLORS.white,
        height: 40,
        width: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 4,
        borderColor: COLORS.blue,
        borderWidth: 2,
        marginHorizontal: 2
    },
    singleBodyBtnTxt: {
        color: COLORS.black,
        fontSize: 14,
        fontWeight: '600'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: COLORS.black
    },
    inputLarge: {
        height: 150,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: COLORS.black
    },
    continueBtn: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 12,
    }
})