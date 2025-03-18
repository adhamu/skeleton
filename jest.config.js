const baseConfig = require('@adhamu/zero/jest')

module.exports = {
  ...baseConfig,
  transform: {
    '^.+\\.ts(x)?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [],
  setupFilesAfterEnv: ['<rootDir>/jest.preset.ts'],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': '@swc/jest',
  },
}
