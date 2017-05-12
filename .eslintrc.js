module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "plugins": [
      "react",
      "jsx-a11y",
      "import"
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx"]
      }
    },
  },
  "rules": {
    "import/extensions" : 'off',
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "jsx-a11y/img-has-alt": 'off',
    "import/no-unresolved": [2, { "ignore": ["react", "prop-types"] }]
  },
  "globals": {
    "document": true,
    "window": true
  }
};
