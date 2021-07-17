import { defineConfig, loadEnv } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import eslint from '@rollup/plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    esbuild: {
      jsxInject: `import React from 'react'`,
    },
    plugins: [
      tsconfigPaths(),
      reactRefresh(),
      {
        ...eslint({
          include: ['.src/**/*.ts', '.src/**/*.js'],
        }),
        enforce: 'pre',
      },
      viteCompression(),
    ],
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.MODE),
    },
  });
};
