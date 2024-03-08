module.exports = {
  testTimeout: 5000,
  reporters: [
    'default',
    ['./tests/e2e/utils/TestsCSVReporter.js', { outputDir: './tests/e2e/results' }]
  ]
}
