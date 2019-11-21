module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'prettier/prettier': ['error', { trailingComma: 'all', singleQuote: true }],
    'linebreak-style': ['error', 'unix'],
    'arrow-parens': [2, 'as-needed'],
    'react/prop-types': [0],
    'react/destructuring-assignment': [0, 'always'],
    'jsx-a11y/label-has-associated-control': [0],
    'jsx-a11y/label-has-for': [0],
    'react/jsx-one-expression-per-line': [0],
    'react/jsx-closing-bracket-location': [0],
    'implicit-arrow-linebreak': [0],
    'no-underscore-dangle': [0],
    'import/prefer-default-export': [0],
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
  },
};
