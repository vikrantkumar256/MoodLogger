import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';



const theme = {
  primary: '#ea9658',
  secondary: '#f5e5c1',
  colorPurple: '#454C73',
  colorWhite: '#fff',
  colorBlack: '#111',
  colorLavender: '#87677B',
  colorBlue: '#1D84B5',
  colorGrey: '#8E9AAF',

  //fonts
  fontFamilyBold: 'Quicksand-Bold',
  fontFamilyRegular: 'Quicksand-Regular',
  fontFamilyLight: 'Quicksand-Thin',
};

export const AppTextLight = ({
  children,
  style,
  ...props
}) => {
  return (
    <Text {...props} style={[fontStyles.light, style]}>
      {children}
    </Text>
  );
};
export const AppTextRegular = ({
  children,
  style,
  ...props
}) => {
  return (
    <Text {...props} style={[fontStyles.regular, style]}>
      {children}
    </Text>
  );
};
export const AppTextBold= ({
  children,
  style,
  ...props
}) => {
  return (
    <Text {...props} style={[fontStyles.bold, style]}>
      {children}
    </Text>
  );
};

const fontStyles = StyleSheet.create({
  light: {
    fontFamily: theme.fontFamilyLight,
  },
  regular: {
    fontFamily: theme.fontFamilyRegular,
  },
  bold: {
    fontFamily: theme.fontFamilyBold,
  },
});

