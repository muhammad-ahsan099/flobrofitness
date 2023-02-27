import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Screen } from '../../components/screen/Screen'
import { Text } from '../../components/text/Text'
import { SubscriptionData } from '../../constant/CustomData/CustomData'
import { theme } from '../../theming'
import Icon from 'react-native-vector-icons/Entypo'
import { Touchable } from '../../components/Touchable/Touchable'
import AppBar from '../../components/appBar/AppBar'
import Accordion from '../../components/accordion/Accordion'
import { LOGOIMG } from '../../constant/Icons'
import CompanyProfile from '../../components/appBar/CompanyProfile'

export default function Subscription({ navigation }) {
    return (
        <View style={styles.container}>
            <Screen
                scroll
                safeArea
                contentContainerStyle={styles.screen}
            >
                <CompanyProfile cardId={3} />
                <View style={styles.parentDiv}>

                    {
                        SubscriptionData.map((item, ind) => (
                            <Accordion title={item.title} key={ind}>
                                <View style={styles.innerView}>
                                    <View style={styles.leftPart}>
                                        <Text color='black' size={15} weight={'regular'} >
                                            New My FitBody Program:
                                        </Text>
                                    </View>
                                    <Text style={styles.innerDetail}>{item.detail.one}</Text>
                                </View>
                                <View style={styles.innerView}>
                                    <View style={styles.leftPart}>

                                        <Text color='black' size={15} weight={'regular'} >
                                            Weekly Check-In:
                                        </Text>
                                    </View>
                                    <Text style={styles.innerDetail}>{item.detail.two}</Text>
                                </View>
                                <View style={styles.innerView}>
                                    <View style={styles.leftPart}>

                                        <Text color='black' size={15} weight={'regular'} >
                                            Support:
                                        </Text>
                                    </View>
                                    <Text style={styles.innerDetail}>{item.detail.three}</Text>
                                </View>
                                <View style={styles.innerView}>
                                    <View style={styles.leftPart}>

                                        <Text color='black' size={15} weight={'regular'} >
                                            Personal Discount:
                                        </Text>
                                    </View>
                                    <Text style={styles.innerDetail}>{item.detail.four}</Text>
                                </View>
                                <View style={styles.innerView}>
                                    <View style={styles.leftPart}>

                                        <Text color='black' size={15} weight={'regular'} >
                                            Affilliate Commission:
                                        </Text>
                                    </View>
                                    <Text style={styles.innerDetail}>{item.detail.five}</Text>
                                </View>
                                <View style={styles.innerView}>
                                    <View style={styles.leftPart}>

                                        <Text color='black' size={15} weight={'regular'} >
                                            Care Package:
                                        </Text>
                                    </View>
                                    <Text style={styles.innerDetail}>{item.detail.six}</Text>
                                </View>
                                <View style={styles.continueBtn}>
                                    <Touchable style={styles.saveBtn} onPress={()=> navigation.navigate('SubscriptionDetail')}>
                                        <Text size={16} weight={'medium'} color="white">{item.payment === 0 ? 'Continue' : `Subscribe ${item.payment}$`}</Text>
                                    </Touchable>
                                </View>


                            </Accordion>
                        ))
                    }
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
    parentDiv: {
        marginTop: 12,
        paddingHorizontal: 16,
        marginBottom: 20
    },
    card: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 12,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    innerView: {
        marginTop: 12,
        paddingHorizontal: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        paddingBottom: 8,
        borderBottomColor: theme.colors.borderColor
    },
    leftPart: {
        width: '40%',
    },
    innerDetail: {
        marginLeft: 10,
        color: '#000',
        flexShrink: 1
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
})