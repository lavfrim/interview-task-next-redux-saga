module.exports = {
    preset: "ts-jest/presets/js-with-ts",
    testEnvironment: "node",
    moduleFileExtensions: ["ts", "tsx", "js"],
    moduleNameMapper: {
      "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
    },
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest"
    },
    testMatch: ["**/__tests__/*.(ts|tsx)"], // [ '**/__tests__/**/*.js?(x)', '**/?(*.)(spec|test).js?(x)' ]
    setupFiles: ["./jest.setup.js"],
    testPathIgnorePatterns: ["./.next/", "./node_modules/"],
    globals: {
      "ts-jest": {
        tsConfig: "tsconfig.jest.json"
      }
    }
};