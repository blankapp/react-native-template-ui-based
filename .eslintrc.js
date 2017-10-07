module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "plugins": [
    "jsdoc"
  ],
  "env": {
    "jest": true,
    "browser": true,
  },
  "rules": {
    "no-alert": 0,
    "class-methods-use-this": 0,
    "react/prop-types": [2, { ignore: ["navigation"], customValidators: [] }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "jsdoc/check-param-names": 1,
    "jsdoc/check-tag-names": 1,
    "jsdoc/check-types": 1,
    "jsdoc/newline-after-description": 1,
    "jsdoc/require-description-complete-sentence": 1,
    "jsdoc/require-example": 1,
    "jsdoc/require-hyphen-before-param-description": 1,
    "jsdoc/require-param": 1,
    "jsdoc/require-param-description": 1,
    "jsdoc/require-param-type": 1,
    "jsdoc/require-returns-description": 1,
    "jsdoc/require-returns-type": 1
  }
};
