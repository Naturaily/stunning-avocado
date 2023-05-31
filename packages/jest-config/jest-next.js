module.exports = {
  roots: ['<rootDir>'],
  resetMocks: true,
  moduleDirectories: ['node_modules'],
  testEnvironment: 'jest-environment-jsdom',

  setupFilesAfterEnv: ['@testing-library/jest-dom', '@natu/jest-config/test-setup.js'],
  collectCoverage: false,
  coverageThreshold: null,
  coverageReporters: ['json', 'html'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  coveragePathIgnorePatterns: [],
  collectCoverageFrom: ['<rootDir>/src/**/*.*', '!<rootDir>/src/**/*.stories.*'],
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.[jt]sx?$',
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
};
