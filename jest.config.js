module.exports = {
  ...require('@adhamu/zero/jest'),
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
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': '@swc/jest',
  },
}
