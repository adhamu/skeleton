const baseConfig = require('@adhamu/zero/jest')

module.exports = {
  ...baseConfig,
  transform: {
    '.*\\.(tsx?|jsx?)$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
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
