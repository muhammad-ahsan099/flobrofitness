import { ActivityIndicator, Animated, Image, SafeAreaView, View } from 'react-native';
import React, { useState } from 'react';

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Feather from 'react-native-vector-icons/Ionicons'

import styles, {
    ACTIVE_CELL_BG_COLOR,
    CELL_BORDER_RADIUS,
    CELL_SIZE,
    DEFAULT_CELL_BG_COLOR,
    NOT_EMPTY_CELL_BG_COLOR,
} from './VerifyEmailStyle';
import Modal from '../../components/modal/Modal';
import { Touchable } from '../../components/Touchable/Touchable';
import { TextInput } from '../../components/textInput/TextInput';
import { Text } from '../../components/text/Text';
import { Screen } from '../../components/screen/Screen';
import { theme } from '../../theming';
import { useDispatch, useSelector } from 'react-redux';
import { emailVerify } from '../../redux/actions/AuthActions';

const { Value, Text: AnimatedText } = Animated;

const CELL_COUNT = 5;
const source = {
    uri:
        'https://user-images.githubusercontent.com/4661784/56352614-4631a680-61d8-11e9-880d-86ecb053413d.png',
};

const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));
const animateCell = ({ hasValue, index, isFocused }) => {
    Animated.parallel([
        Animated.timing(animationsColor[index], {
            useNativeDriver: false,
            toValue: isFocused ? 1 : 0,
            duration: 250,
        }),
        Animated.spring(animationsScale[index], {
            useNativeDriver: false,
            toValue: hasValue ? 0 : 1,
            duration: hasValue ? 300 : 250,
        }),
    ]).start();
};

const VeifyEmail = () => {
    const [value, setValue] = useState('');
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const dispath = useDispatch()
    const userId = useSelector(state => state.AuthReducer.userId)
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const [err, setErr] = useState({ status: false, msg: 'This field is required' })

    const verifyHandler = async () => {
        if (value === '' || value === undefined) {
            setErr({ ...err, status: true })
        } else {

            const status = await dispath(emailVerify(value, userId, setLoading, setErr))
            console.log("Status: ", status);
            if (status) {
                setOpen(true)
            }
        }
    }


    const renderCell = ({ index, symbol, isFocused }) => {
        const hasValue = Boolean(symbol);
        const animatedCellStyle = {
            backgroundColor: hasValue
                ? animationsScale[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
                })
                : animationsColor[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
                }),
            borderRadius: animationsScale[index].interpolate({
                inputRange: [0, 1],
                outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
            }),
            transform: [
                {
                    scale: animationsScale[index].interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.2, 1],
                    }),
                },
            ],
        };

        // Run animation on next event loop tik
        // Because we need first return new style prop and then animate this value
        setTimeout(() => {
            animateCell({ hasValue, index, isFocused });
        }, 0);

        return (
            <AnimatedText
                key={index}
                style={[styles.cell, animatedCellStyle]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
            </AnimatedText>
        );
    };

    return (
        <Screen
            safeArea
            style={styles.root}
        >
            <Text style={styles.title}>Verification</Text>
            <Image style={styles.icon} source={source} />
            <Text style={styles.subTitle}>
                Please enter the verification code{'\n'}
                we send to your email address
            </Text>

            <CodeField
                ref={ref}
                disableAutoFocus={false} // set editable to false to disable animation
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFiledRoot}
                keyboardType="default"
                autoCapitalize="none"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                    <Text
                        key={index}
                        style={[styles.cell, isFocused && styles.focusCell]}
                        onLayout={getCellOnLayoutHandler(index)}>
                        {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>

                )}

            />
            {/* <TextInput
                before={
                    <Feather name='lock-closed' size={26} color={theme.colors.primary} />
                }
                autoCapitalize="none"
                autoCorrect={true}
                multiline={true}
                containerStyle={styles.inputText}
                style={[
                    styles.textInputText,
                ]}
                returnKeyType="next"
                keyboardType="default"
                value={value}
                onChangeText={text => setValue(text)}
            /> */}
            {err.status && <Text style={{ marginTop: 14, textAlign: 'center' }} size={12} color={'error'} weight={'normal'}> {err.msg}</Text>}
            <Touchable style={styles.nextButton} onPress={() => verifyHandler()} disabled={loading}>
                {
                    loading ?
                        <ActivityIndicator size="small" color="#fff" />
                        :
                        <Text style={styles.nextButtonText}>Verify</Text>
                }

            </Touchable>
            <Modal open={open} setOpen={setOpen} />
        </Screen>
    );
};

export default VeifyEmail;
