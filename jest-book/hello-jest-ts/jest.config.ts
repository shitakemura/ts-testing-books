export default {
  preset: 'ts-jest/presets/js-with-ts-esm',
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  collectCoverage: true,
  coverageReporters: ['text-summary', 'html'],
  coverageDirectory: 'reports/coverage',
}
