import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    rules: {
      semi: "warn",
    },
  },
  {
    ignores: [
      '**assets/*',
      'src/App.tsx',
      'src/main.tsx',
      'tsconfig.json',
      ".config/*"
    ]
  },
  {languageOptions: { globals: globals.browser }},
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  
];