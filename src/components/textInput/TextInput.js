import React, { ReactNode } from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput as NativeTextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import { useTheme } from '../theming';

/** TODO: This component is currently unused. Please keep it until there will decide about search for reassign and tags */

interface Props extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  before?: ReactNode;
  after?: ReactNode;
}

export function TextInput({ before, after, containerStyle, style, ...forwardProps }: Props) {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { borderColor: colors.secondary }, containerStyle]}>
      {before}
      <NativeTextInput
        style={[styles.searchInput, style]}
        {...forwardProps}
      />
      {after}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    padding: 0,
    fontSize: 16,
    lineHeight: 20,
    minHeight: 36,
  },
});
