// первый вариант конфигурации eslint
// import js from '@eslint/js';
// import globals from 'globals';
// import { defineConfig } from 'eslint/config';
// import eslintConfigPrettier from 'eslint-config-prettier';
// import eslintPluginPrettier from 'eslint-plugin-prettier';

// export default defineConfig([
//     js.configs.recommended,

//     {
//         files: ['**/*.{js,mjs,cjs}'],
//         languageOptions: {
//             globals: {
//                 ...globals.browser,
//                 ...globals.node,
//             },
//         },
//         plugins: {
//             prettier: eslintPluginPrettier,
//         },
//         rules: {
//             'prettier/prettier': 'error',
//         },
//     },

//     eslintConfigPrettier,
// ]);

// альтернативный вариант конфигурации eslint
import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
    js.configs.recommended,
    {
        files: ['**/*.{js,mjs,cjs}'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
    eslintPluginPrettierRecommended,
]);

// третий вариант конфига eslint? устаревший?
// import globals from 'globals';
// import pluginJs from '@eslint/js';
// import prettierPlugin from 'eslint-plugin-prettier';
// import eslintConfigPrettier from 'eslint-config-prettier';

// export default [
//     {
//         languageOptions: {
//             globals: {
//                 ...globals.browser,
//                 ...globals.es2021,
//             },
//             parserOptions: {
//                 ecmaVersion: 'latest',
//                 sourceType: 'module',
//             },
//         },
//         rules: {
//             'prettier/prettier': 'error',
//         },
//     },
//     pluginJs.configs.recommended,
//     {
//         plugins: {
//             prettier: prettierPlugin,
//         },
//         rules: {
//             ...eslintConfigPrettier.rules,
//         },
//     },
//     {
//         files: ['.eslintrc.{js,cjs}'],
//         languageOptions: {
//             globals: {
//                 ...globals.node,
//             },
//             parserOptions: {
//                 sourceType: 'script',
//             },
//         },
//     },
//     {
//         ignores: ['node_modules', 'dist'],
//     },
// ];
