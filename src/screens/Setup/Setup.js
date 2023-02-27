import { View, Image, FlatList, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { Alert, Linking } from 'react-native';
import { Styles } from "./SetupStyle";
import { SETUP_CUSTOM_DATA } from "../../constant/CustomData/CustomData";
import { Touchable } from '../../components/Touchable/Touchable';
import { Text } from '../../components/text/Text';
import CustomCheckbox from '../../components/checkbox/CustomCheckbox';
import { Screen } from '../../components/screen/Screen';
import CompanyProfile from '../../components/appBar/CompanyProfile';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserStatus } from '../../redux/actions/AuthActions';

const Setup = ({ navigation }) => {
  const [check, setCheck] = useState(false)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const userData = useSelector(state => state.AuthReducer.userData)
  console.log('userData: ', userData);
  const pressHandler = () => {
    if (check && userData) {
      dispatch(updateUserStatus(userData.UserID ? userData.UserID : userData.ID, navigation, 'UserDetail', setLoading))
    }
  }

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
      <ScrollView style={Styles.container}>
        <CompanyProfile cardId={1} />
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
            <CustomCheckbox check={check} setCheck={setCheck} />
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
              {
                loading ?
                  <Touchable style={[Styles.saveBtn]}>
                    <Text size={15} weight={'regular'} color="white">{<ActivityIndicator size={'small'} color={'#fff'} />}</Text>
                  </Touchable>
                  :
                  <Touchable style={[Styles.saveBtn]} onPress={() => pressHandler()} disabled={!check}>
                    <Text size={15} weight={'regular'} color="white">{'Continue'}</Text>
                  </Touchable>
              }
            </View>
          </View>
        </View>
      </ScrollView>
    </Screen>
  )
}

export default Setup