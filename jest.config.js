/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  rootDir: "src",
  preset: "ts-jest",
  testEnvironment: "node",
  setupFiles: ["./test/mocks/browser.ts"],
};
