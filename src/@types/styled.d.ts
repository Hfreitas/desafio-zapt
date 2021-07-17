import * as styledComponents from 'styled-components';

import { Theme } from '../styles';

declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}

// eslint-disable-next-line @typescript-eslint/unbound-method
const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  ThemedStyledInterface,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

export type ThemedStyledProps<P> = styledComponents.ThemedStyledProps<P, Theme>;

export {
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  ThemedStyledInterface,
};
export default styled;
