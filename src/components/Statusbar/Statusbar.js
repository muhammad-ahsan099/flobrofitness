import React, {memo} from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

export default memo(({backgroundColor, ...props}) => {
  return (
    <View style={[{height: STATUSBAR_HEIGHT}, {backgroundColor}]}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  );
});
