module.exports = {
  trailingComma: "all",
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  printWidth: 100,
  overrides: [
    {
      files: ["*.ts"],
      parserOptions: {
        project: [
          "tsconfig.*?.json",
          "e2e/tsconfig.json"
        ],
        createDefaultProgram: true
      },
      extends: [
        "plugin:@angular-eslint/recommended",
        'airbnb-typescript/base',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
      ],
    }
  ]
}
