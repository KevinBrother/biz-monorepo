module.exports = {
  root: true,
  extends: ['@biz/eslint-config/react'],
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: [
    'node_modules/**',
    'dist/**',
    'build/**',
    'storybook-static/**',
    '.storybook/**',
  ],
}
