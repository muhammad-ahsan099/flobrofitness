import { View, ScrollView, TouchableOpacity } from 'react-native'
import Slider from "react-native-slider";
import { Text } from '../../components/text/Text';
import React from 'react'
import { Styles } from "./UserDetailStyle";
import { COLORS } from "../../assests/colors/Colors";
import { USER_FIELDS_DATA } from "../../constant/CustomData/CustomData";
import CustomButton from '../../components/button/CustomButton';
import { theme } from '../../theming';
import { TextInput } from '../../components/textInput/TextInput';
import { Touchable } from '../../components/Touchable/Touchable';
import { Screen } from '../../components/screen/Screen';
import { UseUserDetail } from './UseUserDetail'

const UserDetail = () => {
    // Custom Hook
    const [{
        inputs,
        onChangeHandler,
        addUserHandler,
    }] = UseUserDetail()
    // RangeComponent
    const RangeComponent = ({ singleData }) => {
        return (
            <>
                <View key={singleData?.id}>
                    <Text color='primary' size={16} weight={'medium'} >
                        {singleData?.heading}
                    </Text>
                    <View style={Styles.genderDiv}>
                        <Text style={Styles.genderHeadingTxt}>
                            {singleData?.text}
                        </Text>
                        <View style={Styles.rangesDiv}>
                            <Slider
                                maximumTrackTintColor={'gray'}
                                minimumTrackTintColor={theme.colors.primary}
                                thumbTintColor={theme.colors.primary}
                                trackStyle={{ height: 6 }}
                            />
                        </View>
                    </View>
                </View>
            </>
        )
    }
    return (
        <View style={Styles.container}>
            <Screen
                scroll
                safeArea
                contentContainerStyle={Styles.screen}
            >
                <View style={Styles.mainContainer}>
                    <View>
                        <Text color='primary' size={16} weight={'medium'} >
                            What's Your Gender?
                        </Text>
                        <View style={Styles.genderDiv}>
                            <Text style={Styles.genderHeadingTxt}>
                                My Sex Is: Female
                            </Text>
                            <View style={Styles.genderBtnContainer}>
                                <TouchableOpacity>
                                    <View style={Styles.femaleBtn}>
                                        <Text style={Styles.femaleBtnTxt}>
                                            Female
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={Styles.maleBtn}>
                                        <Text style={Styles.maleBtnTxt}>
                                            Male
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <RangeComponent
                        singleData={USER_FIELDS_DATA?.userData[0]}
                    />
                    <RangeComponent
                        singleData={USER_FIELDS_DATA?.userData[1]}
                    />
                    <RangeComponent
                        singleData={USER_FIELDS_DATA?.userData[2]}
                    />
                    <View>
                        <Text color='primary' size={16} weight={'medium'} >
                            What Is Your Body Type?
                        </Text>
                        <View style={Styles.genderDiv}>
                            <Text style={Styles.genderHeadingTxt}>
                                My Body Type Is: Ectomorph
                            </Text>
                            <View style={Styles.bodyBtnContainer}>
                                <TouchableOpacity>
                                    <View style={Styles.bodyBtn}>
                                        <Text style={Styles.bodyBtnTxt}>
                                            {USER_FIELDS_DATA?.bodyBtnData?.istBtn?.text}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View
                                        style={
                                            USER_FIELDS_DATA?.bodyBtnData?.secondBtn?.btnStatus ?
                                                Styles.bodyBtn
                                                :
                                                Styles.singleBodyBtn
                                        }
                                    >
                                        <Text
                                            style={
                                                USER_FIELDS_DATA?.bodyBtnData?.secondBtn?.btnStatus ?
                                                    Styles.bodyBtnTxt
                                                    :
                                                    Styles.singleBodyBtnTxt
                                            }
                                        >
                                            {USER_FIELDS_DATA?.bodyBtnData?.secondBtn?.text}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View
                                        style={
                                            USER_FIELDS_DATA?.bodyBtnData?.thirdBtn?.btnStatus ?
                                                Styles.bodyBtn
                                                :
                                                Styles.singleBodyBtn
                                        }
                                    >
                                        <Text
                                            style={
                                                USER_FIELDS_DATA?.bodyBtnData?.thirdBtn?.btnStatus ?
                                                    Styles.bodyBtnTxt
                                                    :
                                                    Styles.singleBodyBtnTxt
                                            }
                                        >
                                            {USER_FIELDS_DATA?.bodyBtnData?.thirdBtn?.text}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text color='lightGrey' size={16} weight={'medium'} >
                            Country
                        </Text>
                        <TextInput
                            placeholder="Pakistan"
                            placeholderTextColor={theme.colors.lightGrey}
                            autoCapitalize="none"
                            autoCorrect={true}
                            containerStyle={Styles.textInput}
                            style={[
                                Styles.textInputText,
                            ]}
                            returnKeyType="next"
                            value={inputs?.country}
                            onChangeText={onChangeHandler('Pakistan')}
                        />
                    </View>
                    <View>
                        <Text color='lightGrey' size={16} weight={'medium'} >
                            City
                        </Text>
                        <TextInput
                            placeholder="Faisalabad"
                            placeholderTextColor={theme.colors.lightGrey}
                            autoCapitalize="none"
                            autoCorrect={true}
                            containerStyle={Styles.textInput}
                            style={[
                                Styles.textInputText,
                            ]}
                            textContentType="city"
                            returnKeyType="next"
                            value={inputs?.city}
                            onChangeText={onChangeHandler('Faisalabad')}
                        />
                    </View>
                    <View>
                        <Text color='lightGrey' size={16} weight={'medium'} >
                            Zip Code
                        </Text>
                        <TextInput
                            placeholder="000000"
                            placeholderTextColor={theme.colors.lightGrey}
                            autoCapitalize="none"
                            autoCorrect={true}
                            containerStyle={Styles.textInput}
                            style={[
                                Styles.textInputText,
                            ]}
                            returnKeyType="next"
                            keyboardType="numeric"
                            value={inputs?.zipCode}
                            onChangeText={onChangeHandler('000000')}
                        />
                    </View>
                    <View>
                        <Text color='lightGrey' size={16} weight={'medium'} >
                            Address
                        </Text>

                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={true}
                            multiline={true}
                            style={[
                                Styles.inputLarge,
                                Styles.textInputText,
                            ]}
                            returnKeyType="next"
                            keyboardType="default"
                            value={inputs?.address}
                            onChangeText={onChangeHandler('Something')}
                        />
                    </View>
                    <View>
                        <Text color='lightGrey' size={16} weight={'medium'} >
                            Additional Info
                        </Text>
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={true}
                            multiline={true}
                            style={[
                                Styles.inputLarge,
                                Styles.textInputText,
                            ]}
                            returnKeyType="next"
                            keyboardType="default"
                            value={inputs?.additionalInfo}
                            onChangeText={onChangeHandler('Summary')}
                        />
                    </View>
                    <View style={Styles.continueBtn}>
                        <Touchable style={Styles.saveBtn}>
                            <Text size={16} weight={'medium'} color="white" onPress={addUserHandler}>Save</Text>
                        </Touchable>
                    </View>
                </View>
            </Screen>
        </View>
    )
}

export default UserDetail
