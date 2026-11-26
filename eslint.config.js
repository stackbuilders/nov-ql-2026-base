import js from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/ban-ts-comment': 'error',
      'no-console': 'error',
      'no-restricted-properties': [
        'error',
        {
          object: 'Math',
          property: 'random',
          message: 'Inyecta el generador aleatorio; Math.random solo en src/main.tsx.',
        },
      ],
    },
  },
  {
    files: ['src/main.tsx'],
    rules: { 'no-restricted-properties': 'off' },
  },
)
