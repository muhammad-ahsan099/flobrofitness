import { StyleSheet } from "react-native";
import { theme } from "../../theming";

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        // paddingHorizontal: 16
    },
    image: {
        flex: 1,
    },
    logo: {
        height: 174,
        width: 182,
        marginBottom: 20
    },
    loginBox: {
        backgroundColor: '#fff',
        // height: '70%', 
        marginHorizontal: 16, 
        borderRadius: 10,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 40
    },
    textInput: {
        alignItems: 'center',
        height: 45,
        paddingHorizontal: 15,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: theme.colors.borderColor,
        marginTop: 10,
        // marginBottom: 16,
    },
    textInputText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#131e22'
    },
    forgotPass: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        // backgroundColor: 'pink',
        marginBottom: 30,
    },
    loginBtn:{
        width: '100%',
        backgroundColor: theme.colors.primary,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: theme.colors.primary,
    },
    loginBtnText: {
        fontWeight: '400',
        fontSize: 20,
        color: theme.colors.white,
    },
    orText: {
        paddingVertical: 10,
    },
    registerBtn:{
        width: '100%',
        backgroundColor: theme.colors.white,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: theme.colors.primary,
    },
    registerBtnText: {
        fontWeight: '400',
        fontSize: 16,
        color: theme.colors.primary,
    },
})