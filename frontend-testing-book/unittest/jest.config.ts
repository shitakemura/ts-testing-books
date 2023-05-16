/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  // Jest実行環境のNode.jsにはDOM APIが標準で用意されていないのでjsdomを使用する
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["./jest.setup.ts"],
};
