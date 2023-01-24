import { View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Alert, Linking } from 'react-native';
import { Styles } from "./SetupStyle";
import AppBar from '../../components/appBar/AppBar';
import { SETUP_CUSTOM_DATA } from "../../constant/CustomData/CustomData";
import { COLORS } from "../../assests/colors/Colors";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Touchable } from '../../components/Touchable/Touchable';
import { Text } from '../../components/text/Text';
import CustomCheckbox from '../../components/checkbox/CustomCheckbox';
import { useHeaderHeight } from '../../customHooks/useHeaderHeight';
import { Screen } from '../../components/screen/Screen';

const Setup = ({ navigation }) => {
  const { statusBarInset } = useHeaderHeight();
  // Comment For Later use
  // const CustomCard = ({ singleCard }) => {
  //   return (
  //     <>
  //       <TouchableOpacity>
  //         <View style={singleCard.cardStatus ? Styles.cardDiv : Styles.cardDivStatus} key={singleCard?.id}>
  //           <FontAwesome name={singleCard?.icon} size={25} color={singleCard.cardStatus ? COLORS?.white : COLORS?.black} />
  //           <Text style={singleCard.cardStatus ? Styles.cardTxt : Styles.cardTxtStatus}>
  //             {singleCard?.text}
  //           </Text>
  //         </View>
  //       </TouchableOpacity>
  //     </>
  //   )
  // }

  const LinkingSocialContacts = async url => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Please try again later.`);
    }
  };


  return (
    <Screen
      safeArea
      scroll={true}
      style={[Styles.main]}>
      <AppBar />
      {/* <ScrollView style={Styles.container}> */}
      {/* <View style={Styles.mainContainer}> */}
      {/* <View>
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
          </View> */}
      {/* </View> */}
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
        <View style={Styles.termsView}>
          <CustomCheckbox />
          <View style={Styles.section}>
            <Text style={Styles.termsDesp}>
              I hearby agree to FloBro Fitness
            </Text>
            <Touchable onPress={() => LinkingSocialContacts("https://www.flobrofitness.com/Policy/Termsofservices")}>
              <Text size={15} color={'secondary'} weight={'regular'}>Terms of Services, </Text>
            </Touchable>

            <Touchable onPress={() => LinkingSocialContacts(github)}>
              <Text size={15} color={'secondary'} weight={'regular'}>Disclaimer, </Text>
            </Touchable>

            <Touchable onPress={() => LinkingSocialContacts("https://www.flobrofitness.com/Policy/PrivacyPolicy")}>
              <Text size={15} color={'secondary'} weight={'regular'}>Privacy Policy, </Text>
            </Touchable>
            <Text size={15} color={'secondary'} weight={'regular'}>& </Text>
            <Touchable onPress={() => LinkingSocialContacts("https://www.flobrofitness.com/Policy/RefundPolicy")}>
              <Text size={15} color={'secondary'} weight={'regular'}>Refund Policy.</Text>
            </Touchable>
          </View>

        </View>

        <View style={Styles.continueBtn}>
          <View style={Styles.continueBtn}>
            <Touchable style={Styles.saveBtn} onPress={()=> navigation.navigate('UserDetail')}>
              <Text size={15} weight={'regular'} color="white">Continue</Text>
            </Touchable>
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
    </Screen>
  )
}

export default Setup