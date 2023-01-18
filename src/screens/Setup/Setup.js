import { View, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Styles } from "./SetupStyle";
import AppBar from '../../components/appBar/AppBar';
import { LOGOIMG } from "../../constant/Icons";
import { SETUP_CUSTOM_DATA } from "../../constant/CustomData/CustomData";
import { COLORS } from "../../assests/colors/Colors";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import CustomButton from "../../components/button/CustomButton";

const Setup = () => {
  // card
  const CustomCard = ({ singleCard }) => {
    return (
      <>
        <TouchableOpacity>
          <View style={singleCard.cardStatus ? Styles.cardDiv : Styles.cardDivStatus} key={singleCard?.id}>
            <FontAwesome name={singleCard?.icon} size={25} color={singleCard.cardStatus ? COLORS?.white : COLORS?.black} />
            <Text style={singleCard.cardStatus ? Styles.cardTxt : Styles.cardTxtStatus}>
              {singleCard?.text}
            </Text>
          </View>
        </TouchableOpacity>
      </>
    )
  }

  return (
    <>
      <AppBar />
      <ScrollView style={Styles.container}>
        <View style={Styles.mainContainer}>
          <View>
            <Image source={LOGOIMG} style={Styles.logoImgStyle} />
          </View>
          <View>
            <Text style={Styles.mainHeading}>
              {SETUP_CUSTOM_DATA?.mainHeading}
            </Text>
            <Text style={Styles.secHeading}>
              {SETUP_CUSTOM_DATA?.secondHeading}
            </Text>
          </View>
          <View
            style={Styles.cardContainer}
          >
            <FlatList
              showsVerticalScrollIndicator={false}
              horizontal={true}
              data={SETUP_CUSTOM_DATA?.cards}
              renderItem={({ item }) => <CustomCard singleCard={item} />}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
        <View style={Styles.mainContentDiv}>
          <Text style={Styles.mainContentTxt}>
            {SETUP_CUSTOM_DATA?.mainContent?.mainContentHeading}
          </Text>
          <Text style={Styles.mainQuestionTxt}>
            {SETUP_CUSTOM_DATA?.mainContent?.mainQuestion}
          </Text>
          <Text style={Styles.mainPointHeadingTxt}>
            {SETUP_CUSTOM_DATA?.mainContent?.mainPointHeading}
          </Text>
          <Text style={Styles.mainPointsHeadings}>
            {SETUP_CUSTOM_DATA?.mainContent?.mainPoints?.headingOne}
          </Text>
          <Text style={Styles.mainPointsdescriptions}>
            {SETUP_CUSTOM_DATA?.mainContent?.mainPoints?.descriptionOne}
          </Text>
          <Text style={Styles.mainPointsHeadings}>
            {SETUP_CUSTOM_DATA?.mainContent?.mainPoints?.headingTwo}
          </Text>
          <Text style={Styles.mainPointsdescriptions}>
            {SETUP_CUSTOM_DATA?.mainContent?.mainPoints?.descriptionTwo}
          </Text>
          <Text style={Styles.mainPointsHeadings}>
            {SETUP_CUSTOM_DATA?.mainContent?.mainPoints?.headingThree}
          </Text>
          <Text style={Styles.mainPointsdescriptions}>
            {SETUP_CUSTOM_DATA?.mainContent?.mainPoints?.descriptionThree}
          </Text>
          <Text style={Styles.termsDes}>
            {SETUP_CUSTOM_DATA?.mainContent?.mainDescription}
          </Text>
          <Text style={Styles.termsDes}>
            {SETUP_CUSTOM_DATA?.mainContent?.termsPolicy}
          </Text>
          <View style={Styles.continueBtn}>
            <CustomButton
              title='Continue'
              btnColor={COLORS.blue}
            />
          </View>
        </View>
      </ScrollView>
    </>
  )
}

export default Setup