import { View, TouchableOpacity, ActivityIndicator, PanResponder } from 'react-native'
import Slider from "react-native-slider";
import { Text } from '../../components/text/Text';
import React, { useState } from 'react'
import { Styles } from "./UserDetailStyle";
import { theme } from '../../theming';
import { TextInput } from '../../components/textInput/TextInput';
import { Touchable } from '../../components/Touchable/Touchable';
import { Screen } from '../../components/screen/Screen';
import UseUserDetail from './UseUserDetail'
import CompanyProfile from '../../components/appBar/CompanyProfile';
import CountryPicker from 'react-native-country-picker-modal';

const UserDetail = () => {
    // Custom Hook
    const {
        inputs,
        loading,
        onChangeHandler,
        gender,
        bodyName,
        genderPress,
        bodyType,
        radioPress,
        addUserDetailHandler,
        selectedCountry,
        setSelectedCountry
    } = UseUserDetail()

    const feet = Math.floor(inputs.height / 12);
    const inches = inputs.height % 12;
    const [show, setShow] = useState(false)

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
                <CompanyProfile cardId={2} />
                <View style={Styles.mainContainer}>
                    <View>
                        <Text color='primary' size={16} weight={'medium'} >
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
                                    maximumValue={96}
                                    minimumValue={13}
                                    step={1}
                                    maximumTrackTintColor={'gray'}
                                    minimumTrackTintColor={theme.colors.primary}
                                    thumbTintColor={theme.colors.primary}
                                    trackStyle={{ height: 3 }}
                                    value={inputs.age}
                                    onValueChange={onChangeHandler('age')}
                                    trackPressable={true}
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
                                {`My Height Is: ${feet} Feet ${inches} Inches`}
                            </Text>
                            <View style={Styles.rangesDiv}>
                                <Slider
                                    maximumValue={93}
                                    minimumValue={36}
                                    step={1}
                                    maximumTrackTintColor={'gray'}
                                    minimumTrackTintColor={theme.colors.primary}
                                    thumbTintColor={theme.colors.primary}
                                    trackStyle={{ height: 3 }}
                                    value={inputs.height}
                                    onValueChange={onChangeHandler('height')}
                                    trackPressable={true}
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
                                    minimumValue={30}
                                    step={1}
                                    maximumTrackTintColor={'gray'}
                                    minimumTrackTintColor={theme.colors.primary}
                                    thumbTintColor={theme.colors.primary}
                                    trackStyle={{ height: 3 }}
                                    value={inputs.weight}
                                    onValueChange={onChangeHandler('weight')}
                                    trackPressable={true}
                                />
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text color='primary' size={16} weight={'medium'} >
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
                                            key={index}
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
                        <Text color='lightGrey' size={16} weight={'medium'} >
                            Country
                        </Text>
                        <Touchable onPress={()=> setShow(true)}>
                        {/* <TextInput
                            placeholder="country"
                            placeholderTextColor={theme.colors.lightGrey}
                            autoCapitalize="none"
                            autoCorrect={true}
                            containerStyle={Styles.textInput}
                            style={[
                                Styles.textInputText,
                            ]}
                            returnKeyType="next"
                            value={inputs?.country}
                            onChangeText={onChangeHandler('country')}
                        /> */}
                        <CountryPicker
                            withFlag={true}
                            withCallingCode={true}
                            onSelect={(country) => {
                                setSelectedCountry({name: country?.name, flag: country?.flag, code: country?.callingCode[0]})
                            }
                        }
                            visible={show}
                            containerButtonStyle={Styles.countryInput}
                            placeholder={selectedCountry?.name}
                            withCountryNameButton={true}
                            placeholderTextColor={theme.colors.lightGrey}
                            withFilter={true}
                        />
                         </Touchable>
                    </View>
                    <View>
                        <Text color='lightGrey' size={16} weight={'medium'} >
                            City
                        </Text>
                        <TextInput
                            placeholder="city"
                            placeholderTextColor={theme.colors.lightGrey}
                            autoCapitalize="none"
                            autoCorrect={true}
                            containerStyle={Styles.textInput}
                            style={[
                                Styles.textInputText,
                            ]}
                            returnKeyType="next"
                            value={inputs?.city}
                            onChangeText={onChangeHandler('city')}
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
                            onChangeText={onChangeHandler('zipCode')}
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
                            onChangeText={onChangeHandler('address')}
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
                            onChangeText={onChangeHandler('additionalInfo')}
                        />
                    </View>
                    <View style={Styles.continueBtn}>
                        {
                            loading ?
                                <Touchable style={[Styles.saveBtn]}>
                                    <Text size={15} weight={'regular'} color="white">{<ActivityIndicator size={'small'} color={'#fff'} />}</Text>
                                </Touchable>
                                :
                                <Touchable style={[Styles.saveBtn]} onPress={() => addUserDetailHandler()}>
                                    <Text size={16} weight={'medium'} color="white">{'Save'}</Text>
                                </Touchable>
                        }
                    </View>
                </View>
            </Screen>
        </View>
    )
}

export default UserDetail
