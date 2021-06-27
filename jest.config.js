module.exports = {
  verbose: false,
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  testRegex: '(/__tests__/.*.(test|spec))\\.(ts|tsx|js)?$',
}
