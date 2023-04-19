import { theme } from '../../theming';
import React from 'react';
import {Text} from '../../components/text/Text'
export function TabLabel({ focused, name }) {  
  return (
    <Text weight="semibold" size={12} color={focused ? 'white' : 'white'}>
      {name}
    </Text>
  );
}
