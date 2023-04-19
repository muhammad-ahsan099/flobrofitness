
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Screen } from '../../components/screen/Screen'
import { theme } from '../../theming'
import { CardField, useStripe } from '@stripe/stripe-react-native';
import { Text } from '../../components/text/Text';
import { Touchable } from '../../components/Touchable/Touchable';
import { TextInput } from '../../components/textInput/TextInput';
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { stripeToken, updateUserStatus } from '../../redux/actions/AuthActions';

export default function CardInfo() {
    const navigation = useNavigation()
    const route = useRoute()
    const [cardDetails, setCardDetails] = useState();
    const [token, setToken] = useState();
    const { createToken } = useStripe();
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const dispath = useDispatch()
    const userData = useSelector((store) => store.AuthReducer.userData);
    const { courseTitle, price, memberShipId } = route.params

    useEffect(() => {
        if (userData) {
            setEmail(userData?.Email)
        }
    }, [userData])

    const handleCardChange = (cardDetails) => {
        if (cardDetails?.complete) {
            setCardDetails(cardDetails);
        }
    };

    const handlePayment = async () => {
        try {
            const tokenId = await createToken({
                ...cardDetails,
                type: 'Card', // specify the type of token to create
            });
            setToken(tokenId)

            if (tokenId?.token?.id) {
                const data = {
                    userId: userData?.UserID,
                    stripeEmail: email.replace("@", "%40"),
                    stripeToken: tokenId?.token?.id,
                    MemberId: memberShipId,
                    Price: price,
                    Package: '%22%22',
                    Currency: 'USD',
                    ReferralId: 0,
                    discountcode: '%22%22',
                    usedRewardPoints: 0
                }

                const url = `UserId=${data.userId}&stripeEmail=${data.stripeEmail}&stripeToken=${data.stripeToken}&MemberId=${data.MemberId}&Price=${data.Price}&Package=${data.Package}&Currency=USD&ReferralId=0&discountcode=${data.discountcode}&usedRewardPoints=0`
                const status = await dispath(stripeToken(url, setLoading))
                dispath(updateUserStatus(userData.UserID ? userData.UserID : userData.ID))

                if (status) {
                    navigation.replace('BottomTabs');
                    navigation.reset({ index: 0, routes: [{ name: 'BottomTabs' }] });
                }
            }

        } catch (err) {
            console.log("Error at Payment:  ", err);
        }
    }

    return (
        <View style={styles.container}>
            <Screen
                scroll
                safeArea
                contentContainerStyle={styles.screen}
                statusbar
                statusbarContent="light-content"
                statusbarColor={theme.colors.primary}
            // style={{backgroundColor: theme.colors.primary}}
            >
                <View style={styles.header}>
                    <Touchable style={{ paddingRight: 16 }} onPress={() => navigation.goBack()}>
                        <Feather name='arrow-left' size={30} color={theme.colors.white} />
                    </Touchable>

                    <Text size={18} weight={'semiBold'} color={'white'}>Card Detail</Text>

                </View>

                <View style={styles.parentDiv}>
                    <View style={styles.parentDivTwo}>

                        <View style={styles.card}>
                            <TextInput
                                autoCapitalize="none"
                                autoCorrect={true}
                                placeholder="Your email"
                                placeholderTextColor={theme.colors.lightGrey} multiline={true}
                                containerStyle={styles.inputText}
                                style={[
                                    styles.textInputText,
                                ]}
                                returnKeyType="next"
                                keyboardType="default"
                                value={email}
                                onChangeText={text => setEmail(text)}
                            />

                        </View>
                        <View style={[styles.card, { height: 80 }]}>

                            <View style={{ flexDirection: 'row' }}>

                                <CardField
                                    postalCodeEnabled={false}
                                    placeholders={{
                                        number: '4242 4242 4242 4242'
                                    }}
                                    cardStyle={{
                                        backgroundColor: '#FFFFFF',
                                        textColor: '#000000',
                                        placeholderColor: '#555555',
                                    }}
                                    style={{
                                        width: '100%',
                                        marginTop: 4,
                                        height: Platform.OS === 'ios' ? 35 : 50,
                                    }}
                                    onCardChange={handleCardChange}
                                // onFocus={focusedField => {
                                //     console.log('focusField', focusedField);
                                // }}
                                />
                            </View>
                        </View>

                        {
                            loading ?
                                <Touchable style={styles.payBtn} onPress={() => handlePayment()}>
                                    <ActivityIndicator size='small' color='#fff' />
                                </Touchable>
                                :
                                <Touchable style={styles.payBtn} onPress={() => handlePayment()}>
                                    <Text size={15} weight={'medium'} color="white">Pay</Text>
                                </Touchable>
                        }


                    </View>

                </View>
            </Screen>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
    },
    screen: {
        justifyContent: 'space-between',
        backgroundColor: theme.colors.white,
    },
    header: {
        flexDirection: 'row',
        backgroundColor: theme.colors.primary,
        paddingHorizontal: 16,
        height: 60,
        alignItems: 'center'
    },
    mainContainerTop: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: theme.colors.primary,
        paddingTop: 30,
        paddingBottom: 20,
    },
    logoImgStyle: {
        height: 180,
        width: 150,
    },
    mainHeading: {
        fontSize: 28,
        color: theme.colors.white,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 5
    },
    secHeading: {
        fontSize: 12,
        color: theme.colors.white,
        textAlign: 'center',
        fontWeight: '500',
        marginBottom: 5
    },
    parentDiv: {
        marginTop: 12,
        paddingHorizontal: 16,
    },
    parentDivTwo: {
        marginTop: 12,
    },
    innerView: {
        marginTop: 12,
        flexDirection: 'row',
        borderBottomWidth: 1,
        paddingBottom: 12,
        borderBottomColor: theme.colors.borderColor,
        alignItems: 'center'
    },
    leftDiv: {
        width: '35%',
    },
    text: {
        paddingVertical: 6
    },
    innerDetail: {
        color: '#000',
        flexShrink: 1
    },
    card: {
        justifyContent: 'center',
        // height: 50,
        marginTop: 10,
        zIndex: 1,
        paddingHorizontal: 10
    },
    applyBtn: {
        paddingHorizontal: 4,
        backgroundColor: theme.colors.white,
        width: 60,
        height: 30,
        borderRadius: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: theme.colors.white,
        marginTop: 4,
        marginLeft: 10
    },
    textInputText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#131e22',
    },
    inputText: {
        flex: 1,
        height: 30,
        borderBottomWidth: 1,
        marginTop: 4,
        paddingHorizontal: 10,
        // paddingVertical: 4,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: theme.colors.borderColor,
        backgroundColor: '#fff'
    },
    payBtn: {
        marginTop: 10,
        backgroundColor: theme.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        flex: 1

    },
})