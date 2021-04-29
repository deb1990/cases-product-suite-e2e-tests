module.exports = {
  preset: 'jest-playwright-preset',
  testMatch: ["**/tests/**/(*.)spec.ts"],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
}
