module.exports = {
  root: true,
  extends: ['@biz/eslint-config'],
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: [
    'apps/**',
    'packages/**',
    'node_modules/**',
    'dist/**',
    'build/**',
    '.next/**',
  ],
};