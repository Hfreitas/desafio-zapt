import { colors } from './colors';
import { fonts } from './fonts';
import { GlobalStyle } from './global';

export const theme = {
  colors,
  fonts,
};

export type Theme = typeof theme;

export { GlobalStyle };
