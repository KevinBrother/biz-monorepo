module.exports = {
  root: true,
  extends: ['next/core-web-vitals', '@biz/eslint-config/base'],
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: [
    'node_modules/**',
    '.next/**',
    'out/**',
  ],
};