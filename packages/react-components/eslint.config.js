import bizReactConfig from '@biz/eslint-config/react.js'

export default [
  ...bizReactConfig,
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'storybook-static/**',
      '.storybook/**',
    ],
  },
]
