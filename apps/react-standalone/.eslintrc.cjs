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
    'vite.config.ts',
  ],
};