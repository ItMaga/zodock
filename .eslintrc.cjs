module.exports = {
  extends: '@antfu/eslint-config-ts',
  rules: {
    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    'curly': ['error', 'multi-line', 'consistent'],
  },
};
