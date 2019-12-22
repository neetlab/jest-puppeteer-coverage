module.exports = {
  preset: 'jest-puppeteer',
  setupFilesAfterEnv: ["jest-puppeteer-istanbul/lib/setup"],
  reporters: ["default", "jest-puppeteer-istanbul/lib/reporter"],

  collectCoverage: true,
  coverageReporters: ["json", "text", "lcov"],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coverageDirectory: '<rootDir>/coverage',

  testMatch: ['<rootDir>/src/**/?(*.)spec.ts?(x)'],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  transform: { '^.+\\.tsx?$': 'ts-jest' },
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.json',
    },
  },
};
