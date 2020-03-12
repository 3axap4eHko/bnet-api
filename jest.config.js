module.exports = {
  verbose: true,
  collectCoverage: !!process.env.TRAVIS || !!process.env.COVERAGE,
  collectCoverageFrom: [
    'src/**/*.ts',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '__fixtures__',
    '__mocks__',
    '__tests__',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  coverageDirectory: './coverage',
  projects: ['<rootDir>'],
  setupFiles: ['dotenv/config'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.ts',
  ],
};
