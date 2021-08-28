import * as tokens from '@shopify/polaris-tokens';
import {BoxProps, createTheme, TextProps} from '@shopify/restyle';
import {ScreenProps} from '@ui';

const pxToNumber = (px: string) => {
  return parseInt(px.replace('px', ''), 10);
};

const base = {
  breakpoints: {
    xl: 1024,
    m: {
      height: 812,
      width: 0,
    },
    s: 0,
    l: 768,
  },
  colors: {
    background: tokens.colorWhite,
    danger: tokens.colorRed,
    onBackground: tokens.colorBlack,
    primary: tokens.colorIndigo,
  },
  spacing: {
    l: pxToNumber(tokens.spacingLoose),
    m: pxToNumber(tokens.spacingBase),
    none: 0,
    s: pxToNumber(tokens.spacingBaseTight),
    xs: pxToNumber(tokens.spacingExtraTight),
  },
};

type BaseThemeType = typeof base & {
  screenVariants: {[key: string]: ScreenProps};
  viewVariants: {[key: string]: BoxProps<typeof base>};
  textVariants: {[key: string]: TextProps<typeof base>};
};

export const baseTheme: BaseThemeType = createTheme<BaseThemeType>({
  ...base,
  screenVariants: {
    defaults: {
      flex: 1,
      backgroundColor: 'background',
      paddingHorizontal: 'm',
    },
  },
  viewVariants: {
    defaults: {},
  },
  textVariants: {
    paragraph: {
      color: 'onBackground',
      fontSize: 16,
      lineHeight: 16 * 1.7,
    },
    subtitle: {
      color: 'onBackground',
      fontSize: 21,
      fontWeight: 'bold',
      lineHeight: 21 * 1.7,
    },
    title: {
      color: 'onBackground',
      fontSize: 37,
      fontWeight: 'bold',
      lineHeight: 37 * 1.7,
    },
  },
});
