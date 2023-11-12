module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/vue3-essential', // Vue 3 권장 설정
        'eslint:recommended',
        'airbnb-base',
        'plugin:prettier/recommended', // Prettier 권장 설정
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        // 원하는 규칙을 추가 또는 재정의
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'no-alert': 'off',
        'no-use-before-define': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'vue/no-v-html': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/no-multiple-template-root': 'off',
        'prefer-const': 'off',
        'no-restricted-syntax': 'off',
        'no-param-reassign': 'off',
        'prefer-destructuring': 'off',
        'import/prefer-default-export': [
            // 모듈 export 시 파일 내 하나의 모듈만 존재할 경우 export default 문을 붙이도록 하는 옵션
            'off', // 나중에 모듈 수정 시 불편할 것 같아 비활성화 처리
            { target: 'single' }, // default is "single"
        ],
        'import/extensions': [
            // 일관성 있는 Import Path를 위한 설정
            // Airbnb lint rule엔 ts가 빠져있어 ts 확장자에 대한 설정까지 추가하여 덮어쓰기
            'error',
            'ignorePackages',
            {
                js: 'never',
                ts: 'never',
                mjs: 'never',
                jsx: 'never',
            },
        ],
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
};
