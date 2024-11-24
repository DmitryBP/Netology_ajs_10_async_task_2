// jest.config.js
module.exports = {
  testPathIgnorePatterns: [
    '/node_modules/', // Игнорировать папку node_modules
  ],
  coveragePathIgnorePatterns: [
    'src/js/classes/SaveGame/parser.js',
    'src/js/classes/SaveGame/reader.js',
  ],
};
