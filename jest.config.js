module.exports = {
  testEnvironment: 'jsdom',
  clearMocks: true,
  roots: ['<rootDir>'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    'jest-styled-components',
  ],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/jest/__mocks__/fileMock.js',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '<rootDir>/build/',
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
    'types.ts',
    '.d.ts',
  ],
  coverageReporters: ['text', 'html', 'lcov', 'json-summary'],
  verbose: false,
};
