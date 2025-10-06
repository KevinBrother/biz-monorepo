module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Type enum
    'type-enum': [
      2,
      'always',
      [
        'feat', // A new feature
        'fix', // A bug fix
        'docs', // Documentation only changes
        'style', // Changes that do not affect the meaning of the code
        'refactor', // A code change that neither fixes a bug nor adds a feature
        'perf', // A code change that improves performance
        'test', // Adding missing tests or correcting existing tests
        'build', // Changes that affect the build system or external dependencies
        'ci', // Changes to our CI configuration files and scripts
        'chore', // Other changes that don't modify src or test files
        'revert', // Reverts a previous commit
        'deps', // Dependencies updates
        'release', // Release commits
        'config', // Configuration changes
        'security', // Security fixes
        'breaking', // Breaking changes
      ],
    ],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-max-length': [2, 'always', 100],
    'subject-min-length': [2, 'always', 3],
    'subject-full-stop': [2, 'never', '.'],
    'body-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'scope-case': [2, 'always', 'lower-case'],
  },
}
