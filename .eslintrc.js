'use strict';

module.exports = {
    env: {
        es6: true,
        node: true,
        mocha: true
    },
    parserOptions: {
        sourceType: 'module'
    },
    ecmaFeatures: {
        modules: true
    },
    rules: {
        'indent': [2, 2, {'SwitchCase': 1}],
        'quotes': [2, 'single'],
        'linebreak-style': [2, 'unix'],
        'semi': [2, 'always'],
        'no-underscore-dangle': 0,
        'curly': 0,
        'no-use-before-define': [2, 'nofunc'],
        'space-before-function-paren': [2, {'anonymous': 'always', 'named': 'never'}],
        'keyword-spacing': 2,
        'space-before-blocks': [2, 'always'],
        'semi-spacing': [2, {'before': false, 'after': true}],
        'no-var': 2,
        'object-shorthand': [2, 'always'],
        'prefer-const': 2,
        'max-depth': [2, 5],
        'max-len': [2, 250, 2],
        'max-statements': [2, 50],
        'complexity': [1, 5],
        'no-process-exit': 0
    }
};