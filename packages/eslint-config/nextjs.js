module.exports = {
  extends: ['./react.js', 'next/core-web-vitals'],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    // Next.js specific rules
    '@next/next/no-html-link-for-pages': 'error',
    '@next/next/no-img-element': 'warn',

    // Disable rules that conflict with Next.js
    'react/no-unescaped-entities': 'off',
  },
}
