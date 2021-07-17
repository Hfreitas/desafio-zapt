/* eslint-disable import/no-extraneous-dependencies */
import { render, RenderOptions, RenderResult } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';

import { theme } from '../../src/styles';

const Providers = ({ children }: { children?: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const customRender = (
  ui: React.ReactElement,
  options?: RenderOptions,
): RenderResult => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export { customRender as render };
