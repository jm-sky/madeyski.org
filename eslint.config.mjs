import js from '@eslint/js';
import astro from 'eslint-plugin-astro';
import perfectionist from 'eslint-plugin-perfectionist';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  // Base configurations
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,

  // Perfectionist configuration - using "natural" sorting (recommended)
  perfectionist.configs['recommended-natural'],

  // Global configuration
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // TypeScript specific adjustments
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ],

      // Disable conflicting import sorting rules in favor of Perfectionist
      'sort-imports': 'off',

      // Disable some perfectionist rules
      'perfectionist/sort-classes': 'off',
      'perfectionist/sort-interfaces': 'off',
      'perfectionist/sort-object-types': 'off',
      'perfectionist/sort-union-types': 'off',
      'perfectionist/sort-modules': 'off',
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'alphabetical',
          order: 'asc',
          fallbackSort: { type: 'alphabetical', order: 'asc' },
          newlinesBetween: 'never',
          internalPattern: ['^~/.*', '^@/.*'],
          groups: [
            ['builtin', 'external'],
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'object',
            'unknown',
            'type',
            'internal-type',
          ],
        }
      ],
      'perfectionist/sort-objects': [
        'error',
        {
          type: 'unsorted',
        },
      ],
    },
  },

  // Astro-specific configuration
  {
    files: ['**/*.astro'],
    rules: {
      // Disable some rules that can be problematic in .astro files
      '@typescript-eslint/no-explicit-any': 'off',
      'no-undef': 'off', // Astro has global types
    },
  },

  // TypeScript files configuration
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },

  // Ignore patterns
  {
    ignores: [
      'dist/**',
      '.astro/**',
      'node_modules/**',
      '**/*.d.ts',
    ],
  },
];
