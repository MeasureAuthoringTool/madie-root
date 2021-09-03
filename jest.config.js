/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  roots: ["<rootDir>/src/"],
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  preset: "ts-jest",
  testEnvironment: "node",
  setupFiles: ["./src/test/mocks/browser.ts"],
};
