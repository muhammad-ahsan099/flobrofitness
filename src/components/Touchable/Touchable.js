import React, { ReactNode } from 'react';
import { TouchableOpacity, TouchableNativeFeedbackProps, TouchableOpacityProps } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

export interface TouchableProps extends TouchableNativeFeedbackProps, TouchableOpacityProps {
  children: ReactNode;
  activeOpacity?: number;
}

/** TODO: Add native effect for android */
export function Touchable({ children, activeOpacity = 0.6, ...params }: TouchableProps) {
  return (
    // @ts-expect-error - package not properly typed.
    <TouchableOpacity activeOpacity={activeOpacity} {...params}>
      {children}
    </TouchableOpacity>
  );
}
