module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:vue/essential'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
        // 全局变量
        'process': true,
        'require': true,
        'exports': true,
        'module': true,
    },
    'parserOptions': {
        'ecmaVersion': 2018,
        'parser': "babel-eslint"
    },
    'plugins': [
        'vue',
    ],
    'rules': {
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'semi': [
            'error',
            'never'
        ],
        "no-unused-vars":"off"
    },
}