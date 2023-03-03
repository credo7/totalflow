module.exports = {
    root: true,
    extends: ['@packages/eslint-config-custom'],
    plugins: ['react-native'],
    rules: {
        'import/no-extraneous-dependencies': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        'react/react-in-jsx-scope': 'off',
    },
};
