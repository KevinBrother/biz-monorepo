import bizBaseConfig from '@biz/eslint-config/index.js'

export default [
  ...bizBaseConfig,
  {
    ignores: ['node_modules/**', '.next/**', 'out/**'],
  },
]
