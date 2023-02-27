import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Screen } from '../../components/screen/Screen'
import { Text } from '../../components/text/Text'
import { theme } from '../../theming'
import AppBar from '../../components/appBar/AppBar'
import { LOGOIMG } from '../../constant/Icons'
import { Touchable } from '../../components/Touchable/Touchable'
import { TextInput } from '../../components/textInput/TextInput'
import CompanyProfile from '../../components/appBar/CompanyProfile'

export default function SubscriptionDetail({ navigation }) {

    return (
        <View style={styles.container}>
            <Screen
                scroll
                safeArea
                contentContainerStyle={styles.screen}
            >
                <CompanyProfile cardId={4} />


                <View style={styles.parentDiv}>
                    <View style={styles.innerView}>
                        <View style={styles.leftDiv}>
                            <Text weight={'regular'} color={'black'} style={styles.text}>Subscription</Text>
                        </View>
                        <Text size={16} weight={'semiBold'} color={'lightGrey'}>{'BRONZE'}</Text>
                    </View>
                    <View style={styles.innerView}>
                        <View style={styles.leftDiv}>
                            <Text weight={'regular'} color={'black'} style={styles.detail}>Period Type</Text>
                        </View>
                        <Text style={styles.innerDetail}>{'Monthly'}</Text>
                    </View>
                    <View style={styles.innerView}>
                        <View style={styles.leftDiv}>
                            <Text weight={'regular'} color={'black'}>Duration</Text>
                        </View>
                        <Text style={styles.innerDetail}>{'( 09-02-2023) To ( 11-03-2023)'}</Text>
                    </View>
                    <View style={styles.innerView}>
                        <View style={styles.leftDiv}>
                            <Text weight={'regular'} color={'black'}>Price</Text>
                        </View>
                        <Text style={styles.innerDetail}>{'$95.00'}</Text>
                    </View>


                    <View style={styles.parentDivTwo}>
                        <Text size={16} weight={'semiBold'} color={'lightGrey'}>Payment Detail</Text>

                        <View style={styles.card}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <Text color='white'>Total Amount</Text>
                                <Text color='white'>$95</Text>
                            </View>
                        </View>
                        <View style={[styles.card, { height: 80 }]}>
                            <Text color='white'>Discount Code</Text>

                            <View style={{ flexDirection: 'row' }}>
                                <TextInput
                                    autoCapitalize="none"
                                    autoCorrect={true}
                                    multiline={true}
                                    containerStyle={styles.inputText}
                                    style={[
                                        styles.textInputText,
                                    ]}
                                    returnKeyType="next"
                                    keyboardType="default"
                                // value={inputs?.additionalInfo}
                                // onChangeText={text => onChangeHandler(text, 'additionalInfo')}
                                />

                                <Touchable style={styles.applyBtn}>
                                    <Text size={12} weight={'normal'} color="primary">Apply</Text>
                                </Touchable>
                            </View>
                        </View>
                        <View style={styles.card}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <Text color='white'>Promo Discount</Text>
                                <Text color='white'>$47.5</Text>
                            </View>
                        </View>

                        <View style={[styles.card, { height: 80 }]}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <Text color='white'>Promo Discount</Text>
                                <Text color='white'>$47.5</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 }}>
                                <Text color='white'>My Fitbody Reward Points Earned</Text>
                                <Text color='white'>95</Text>
                            </View>
                        </View>


                        <Touchable style={styles.payBtn}>
                            <Text size={15} weight={'medium'} color="white">Pay</Text>
                        </Touchable>


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
        height: 50,
        marginTop: 10,
        zIndex: 1,
        backgroundColor: theme.colors.primary,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
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
        borderWidth: 1,
        marginTop: 4,
        paddingHorizontal: 10,
        // paddingVertical: 4,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: theme.colors.borderColor,
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