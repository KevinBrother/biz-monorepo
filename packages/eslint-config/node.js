module.exports = {
  extends: ['./base.js'],
  env: {
    node: true,
    es6: true,
  },
  rules: {
    // Node.js specific rules
    'no-console': 'off', // Console is ok in Node.js
    'no-process-env': 'off',

    // Import rules for Node.js
    'import/no-unresolved': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
  },
}
