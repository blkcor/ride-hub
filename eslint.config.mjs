import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import tsparser from '@typescript-eslint/parser'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parser: tsparser,
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier: prettierPlugin,
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
])
