import bizConfig from '@biz/eslint-config/index.js'

export default [
  ...bizConfig,
  {
    ignores: [
      'apps/**',
      'packages/**',
      'node_modules/**',
      'dist/**',
      'build/**',
      '.next/**',
    ],
  },
]
