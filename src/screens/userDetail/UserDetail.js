import { View, ScrollView, TouchableOpacity } from 'react-native'
import Slider from "react-native-slider";
import { Text } from '../../components/text/Text';
import React, { useState } from 'react'
import { Styles } from "./UserDetailStyle";
import { COLORS } from "../../assests/colors/Colors";
import { USER_FIELDS_DATA } from "../../constant/CustomData/CustomData";
import { theme } from '../../theming';
import { TextInput } from '../../components/textInput/TextInput';
import { Touchable } from '../../components/Touchable/Touchable';
import { Screen } from '../../components/screen/Screen';
import UseUserDetail from './UseUserDetail'
import AppBar from '../../components/appBar/AppBar';
import { fontStyle } from "../../assests/fonts/Font";

const UserDetail = () => {
    // Custom Hook
    const {
        inputs,
        onChangeHandler,
        gender,
        bodyName,
        genderPress,
        bodyType,
        radioPress,
        addUserHandler,
    } = UseUserDetail()

    const BodyTypeButton = ({ bodyType, radioPress }) => {
        return (
            <TouchableOpacity onPress={radioPress}>
                <View
                    style={
                        bodyType.status ?
                            Styles.bodyBtn
                            :
                            Styles.singleBodyBtn
                    }
                >
                    <Text
                        style={
                            bodyType?.status ?
                                Styles.bodyBtnTxt
                                :
                                Styles.singleBodyBtnTxt
                        }
                    >
                        {bodyType?.title}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={Styles.container}>
            <Screen
                scroll
                safeArea
                contentContainerStyle={Styles.screen}
            >
                <AppBar />
                <View style={Styles.mainContainer}>
                    <View>
                        <Text color='primary' size={16} weight={'medium'} style={{ fontFamily: fontStyle?.PoppinsBold }}>
                            What's Your Gender?
                        </Text>
                        <View style={Styles.genderDiv}>
                            <Text style={Styles.genderHeadingTxt}>
                                My Sex Is: {gender}
                            </Text>
                            <View style={Styles.genderBtnContainer}>
                                <TouchableOpacity onPress={() => genderPress("Female")}>
                                    <View style={[Styles.maleBtn, { backgroundColor: gender === "Female" ? theme.colors.primary : theme.colors.white }]}>
                                        <Text style={[Styles.maleBtnTxt, { color: gender === 'Female' ? theme.colors.white : theme.colors.primary }]}>
                                            Female
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => genderPress("Male")}>
                                    <View style={[Styles.maleBtn, { backgroundColor: gender === "Male" ? theme.colors.primary : theme.colors.white }]}>
                                        <Text style={[Styles.maleBtnTxt, { color: gender === 'Male' ? theme.colors.white : theme.colors.primary }]}>
                                            Male
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text color='primary' size={16} weight={'medium'} >
                            {'How Old Are You?'}
                        </Text>
                        <View style={Styles.genderDiv}>
                            <Text style={Styles.genderHeadingTxt}>
                                {`I Am: ${inputs.age} Years Old`}
                            </Text>
                            <View style={Styles.rangesDiv}>
                                <Slider
                                    maximumValue={90}
                                    minimumValue={0}
                                    step={1}
                                    maximumTrackTintColor={'gray'}
                                    minimumTrackTintColor={theme.colors.primary}
                                    thumbTintColor={theme.colors.primary}
                                    trackStyle={{ height: 6 }}
                                    value={inputs.age}
                                    onValueChange={onChangeHandler('age')}

                                />
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text color='primary' size={16} weight={'medium'} >
                            {'How Tall Are You?'}
                        </Text>
                        <View style={Styles.genderDiv}>
                            <Text style={Styles.genderHeadingTxt}>
                                {`My Height Is: 3 Feet 0 Inches`}
                            </Text>
                            <View style={Styles.rangesDiv}>
                                <Slider
                                    maximumValue={90}
                                    minimumValue={0}
                                    step={1}
                                    maximumTrackTintColor={'gray'}
                                    minimumTrackTintColor={theme.colors.primary}
                                    thumbTintColor={theme.colors.primary}
                                    trackStyle={{ height: 6 }}
                                    value={inputs.height}
                                    onValueChange={onChangeHandler('height')}

                                />
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text color='primary' size={16} weight={'medium'} >
                            {'How Much Do You Weigh?'}
                        </Text>
                        <View style={Styles.genderDiv}>
                            <Text style={Styles.genderHeadingTxt}>
                                {`My Weight Is: ${inputs.weight} lbs`}
                            </Text>
                            <View style={Styles.rangesDiv}>
                                <Slider
                                    maximumValue={400}
                                    minimumValue={0}
                                    step={1}
                                    maximumTrackTintColor={'gray'}
                                    minimumTrackTintColor={theme.colors.primary}
                                    thumbTintColor={theme.colors.primary}
                                    trackStyle={{ height: 6 }}
                                    value={inputs.weight}
                                    onValueChange={onChangeHandler('weight')}

                                />
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text color='primary' size={16} weight={'medium'} style={{ fontFamily: fontStyle?.PoppinsBold }}>
                            What Is Your Body Type?
                        </Text>
                        <View style={Styles.genderDiv}>
                            <Text style={Styles.genderHeadingTxt}>
                                My Body Type Is: {bodyName.title ? bodyName.title : bodyName}
                            </Text>
                            <View style={Styles.bodyBtnContainer}>
                                {
                                    bodyType.map((item, index) => (
                                        <BodyTypeButton
                                            bodyType={item}
                                            radioPress={() =>
                                                radioPress(item.title, index)
                                            }

                                        />
                                    ))
                                }
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text color='lightGrey' size={16} weight={'medium'} style={{ fontFamily: fontStyle?.PoppinsBold }}>
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
                            onChangeText={text => onChangeHandler(text, 'country')}
                        />
                    </View>
                    <View>
                        <Text color='lightGrey' size={16} weight={'medium'} style={{ fontFamily: fontStyle?.PoppinsBold }}>
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
                            returnKeyType="next"
                            value={inputs?.city}
                            onChangeText={text => onChangeHandler(text, 'city')}
                        />
                    </View>
                    <View>
                        <Text color='lightGrey' size={16} weight={'medium'} style={{ fontFamily: fontStyle?.PoppinsBold }}>
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
                            onChangeText={text => onChangeHandler(text, 'zipCode')}
                        />
                    </View>
                    <View>
                        <Text color='lightGrey' size={16} weight={'medium'} style={{ fontFamily: fontStyle?.PoppinsBold }}>
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
                            onChangeText={text => onChangeHandler(text, 'address')}
                        />
                    </View>
                    <View>
                        <Text color='lightGrey' size={16} weight={'medium'} style={{ fontFamily: fontStyle?.PoppinsBold }}>
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
                            onChangeText={text => onChangeHandler(text, 'additionalInfo')}
                        />
                    </View>
                    <View style={Styles.continueBtn}>
                        <Touchable style={Styles.saveBtn} onPress={addUserHandler}>
                            <Text size={16} weight={'medium'} color="white">Save</Text>
                        </Touchable>
                    </View>
                </View>
            </Screen>
        </View>
    )
}

export default UserDetail
