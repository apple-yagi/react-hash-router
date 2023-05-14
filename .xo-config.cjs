module.exports = {
  extends: ["xo-react"],
  rules: {
    "react/function-component-definition": ["error", { namedComponents: "arrow-function" }],
    "import/extensions": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "max-params": ["error", 2],
    "arrow-parens": ["error", "as-needed"],
  },
  semicolon: true,
  prettier: true,
  ignores: ["vite.config.ts"],
};
