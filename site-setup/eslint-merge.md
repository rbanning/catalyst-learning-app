  Add the following to the `eslint.config.mjs` file after the `globalIgnores()` method
  
  ```js
  // application specific rules
  {
    files: ["**/*.ts", "**/*.tsx"],   //if using /src/ folder... ["src/**/*.ts", "src/**/*.tsx"]
    rules: {
      "@typescript-eslint/no-unused-vars": [
          "error", {
            "varsIgnorePattern": "^[ignore | _]",
            "argsIgnorePattern": "^_",
            "caughtErrorsIgnorePattern": "[ignore | _]",
          },
        ]
    }
  }
  ```
