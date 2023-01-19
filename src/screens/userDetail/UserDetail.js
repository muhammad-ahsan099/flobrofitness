import { View, Text, ScrollView, TouchableOpacity, Slider, FlatList, TextInput } from 'react-native'
import React from 'react'
import { Styles } from "./UserDetailStyle";
import { COLORS } from "../../assests/colors/Colors";
import { USER_FIELDS_DATA } from "../../constant/CustomData/CustomData";
import CustomButton from '../../components/button/CustomButton';

const UserDetail = () => {
    // RangeComponent
    const RangeComponent = ({ singleData }) => {
        return (
            <>
                <View key={singleData?.id}>
                    <Text style={Styles.genderHeading}>
                        {singleData?.heading}
                    </Text>
                    <View style={Styles.genderDiv}>
                        <Text style={Styles.genderHeadingTxt}>
                            {singleData?.text}
                        </Text>
                        <View style={Styles.rangesDiv}>
                            <Slider
                                maximumTrackTintColor={'gray'}
                                minimumTrackTintColor={COLORS.blue}
                                thumbTintColor={COLORS.blue}
                            />
                        </View>
                    </View>
                </View>
            </>
        )
    }
    return (
        <ScrollView style={Styles.container}>
            <View style={Styles.mainContainer}>
                <View>
                    <Text style={Styles.genderHeading}>
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
                <FlatList
                    data={USER_FIELDS_DATA?.userData}
                    renderItem={({ item }) => <RangeComponent singleData={item} />}
                    keyExtractor={(item) => item.id}
                />
                <View>
                    <Text style={Styles.genderHeading}>
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
                    <Text style={Styles.genderHeading}>
                        Country
                    </Text>
                    <TextInput
                        style={Styles.input}
                        placeholder="Pakistan"
                        keyboardType="default"
                        placeholderTextColor={COLORS.black}
                    />
                </View>
                <View>
                    <Text style={Styles.genderHeading}>
                        City
                    </Text>
                    <TextInput
                        style={Styles.input}
                        placeholder="Faisalabad"
                        keyboardType="default"
                        placeholderTextColor={COLORS.black}
                    />
                </View>
                <View>
                    <Text style={Styles.genderHeading}>
                        Zip Code
                    </Text>
                    <TextInput
                        style={Styles.input}
                        placeholder="000000"
                        keyboardType="numeric"
                        placeholderTextColor={COLORS.black}
                    />
                </View>
                <View>
                    <Text style={Styles.genderHeading}>
                        Address
                    </Text>
                    <TextInput
                        style={Styles.inputLarge}
                        keyboardType="default"
                    />
                </View>
                <View>
                    <Text style={Styles.genderHeading}>
                        Additional Info
                    </Text>
                    <TextInput
                        style={Styles.inputLarge}
                        keyboardType="default"
                    />
                </View>
                <View style={Styles.continueBtn}>
                    <CustomButton
                        title='Save'
                        btnColor={COLORS.blue}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default UserDetail