module.exports = {
    root: true,
    ignorePatterns: ['dist/*'],
    extends: ['@packages/eslint-config-custom'],
    rules: {
        'no-useless-constructor': 0,
    },
};
