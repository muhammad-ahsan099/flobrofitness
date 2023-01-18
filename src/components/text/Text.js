import React from 'react';
import { Text as NativeText, TextStyle, StyleProp, TextProps as NativeProps } from 'react-native';
import { Theme, useTheme } from '../../theming';

export function Text({
  style,
  color = 'primary',
  size = 14,
  children,
  weight,
  ...rest
}) {
  const theme = useTheme();
  const textColor = theme.colors[color];
  const fontweight = theme.fonts[weight]
  return (
    <NativeText
      {...rest}
      style={[
        {
          fontSize: size,
          color: textColor,
          fontWeight: fontweight,
          // fontFamily: 'Poppins'
        },
        style,
      ]}
    >
      {children}
    </NativeText>
  );
}
