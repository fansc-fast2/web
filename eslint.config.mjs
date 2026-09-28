import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '.tanstack/**',
      'coverage/**',
      'public/**',
      'src/routeTree.gen.ts',
      'vite.config.timestamp_*.js',
    ],
  },
  {
    files: ['**/*.{js,mjs}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      // Renderer templates intentionally escape closing tags and CSS class
      // separators inside JavaScript strings.
      'no-useless-escape': 'off',
      'no-constant-condition': ['error', { checkLoops: false }],
    },
  },
)
