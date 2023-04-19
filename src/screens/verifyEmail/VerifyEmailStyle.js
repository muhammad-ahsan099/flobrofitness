import { StyleSheet, Platform } from 'react-native';
import { theme } from '../../theming';

export const CELL_SIZE = 42;
export const CELL_BORDER_RADIUS = 8;
export const DEFAULT_CELL_BG_COLOR = '#fff';
export const NOT_EMPTY_CELL_BG_COLOR = '#3557b7';
export const ACTIVE_CELL_BG_COLOR = '#f7fafe';

const styles = StyleSheet.create({
    codeFiledRoot: {
        height: CELL_SIZE,
        marginTop: 30,
        // paddingHorizontal: 20,
        justifyContent: 'center',
        textAlign: 'center',
        borderColor: theme.colors.black,
    },
    cell: {
        marginHorizontal: 8,
        height: CELL_SIZE,
        width: CELL_SIZE,
        lineHeight: CELL_SIZE - 5,
        fontSize: 20,
        textAlign: 'center',
        borderRadius: CELL_BORDER_RADIUS,
        color: '#3759b8',
        backgroundColor: '#fff',

        // IOS
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        // Android
        elevation: 3,
    },
    focusCell: {
        borderColor: theme.colors.borderColor,
      },

    // =======================

    root: {
        flex: 1,
        backgroundColor: 'orange',
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    },
    title: {
        paddingTop: 50,
        color: '#000',
        fontSize: 25,
        fontWeight: '700',
        textAlign: 'center',
        paddingBottom: 40,
    },
    icon: {
        width: 217 / 2.4,
        height: 158 / 2.4,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    subTitle: {
        paddingTop: 30,
        color: '#000',
        textAlign: 'center',
    },
    nextButton: {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 60,
        height: 50,
        backgroundColor: theme.colors.primary,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: Platform.OS === 'android' ? 50 : 20,
        left: '15%',
        zIndex: 1000
    },
    nextButtonText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
        fontWeight: '700',
    },
    textInputText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#131e22',
        paddingLeft: 10
    },
    inputText: {
        marginBottom: 6,
        height: 40,
        width: '100%',
        borderWidth: 1,
        marginTop: 4,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: theme.colors.borderColor,
        backgroundColor: '#fff',
        marginTop: 14
    },
});

export default styles;
