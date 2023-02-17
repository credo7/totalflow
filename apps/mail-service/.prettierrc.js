const prettierConfig = require('@packages/prettier-config');

module.exports = {
    ...prettierConfig,
    importOrderParserPlugins: ['typescript', 'decorators-legacy'],
};
