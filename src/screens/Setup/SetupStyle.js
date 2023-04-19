import { StyleSheet } from "react-native";
import { COLORS } from "../../assests/colors/Colors";
import { theme } from "../../theming";

export const Styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff'
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    mainContainer: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: COLORS.blue,
        paddingTop: 30,
        paddingBottom: 20,
    },
    logoImgStyle: {
        height: 180,
        width: 150,
    },
    mainHeading: {
        fontSize: 28,
        color: COLORS.white,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 5
    },
    secHeading: {
        fontSize: 12,
        color: COLORS.white,
        textAlign: 'center',
        fontWeight: '500',
        marginBottom: 5
    },
    cardContainer: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 16
    },
    cardDiv: {
        borderColor: COLORS.white,
        borderWidth: 2,
        height: 75,
        width: 80,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 1,
        marginTop: 10,
    },
    cardDivStatus: {
        backgroundColor: COLORS.white,
        height: 75,
        width: 80,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 1,
        marginTop: 10,
    },
    cardTxt: {
        fontSize: 10,
        textAlign: 'center',
        fontWeight: '500',
        color: COLORS.white,
        marginTop: 4
    },
    cardTxtStatus: {
        fontSize: 10,
        textAlign: 'center',
        fontWeight: '500',
        marginTop: 4,
        color: COLORS.black
    },
    mainContentDiv: {
        flex: 2,
        flexDirection: 'column',
        backgroundColor: COLORS.white,
        paddingVertical: 5
    },
    mainContentTxt: {
        color: COLORS.black,
        fontSize: 18,
        fontWeight: '700',
        marginVertical: 5,
        textAlign: 'center'
    },
    mainQuestionTxt: {
        color: COLORS.blue,
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 10
    },
    mainPointHeadingTxt: {
        color: COLORS.blue,
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 10,
        marginHorizontal: 12
    },
    mainPointsHeadings: {
        color: COLORS.black,
        fontSize: 16,
        fontWeight: '700',
        marginLeft: 12,
        marginTop: 13
    },
    mainPointsdescriptions: {
        color: COLORS.blue,
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 10,
        marginHorizontal: 12
    },
    termsDes: {
        color: theme.colors.primary,
        fontSize: 16,
        fontWeight: '500',
        marginVertical: 12,
        marginHorizontal: 12
    },
    termsDesp: {
        color: theme.colors.primary,
        fontSize: 16,
        fontWeight: '500',
        alignItems: 'center',
    },
    termsView: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        marginHorizontal: 12,
    },
    section: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginLeft: 8

    },
    continueBtn: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 12,
    },
    saveBtn: {
        width: 110,
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