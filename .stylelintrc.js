module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    indentation: 2,
    'color-hex-case': 'lower',
    'no-descending-specificity': null,
    'value-keyword-case': null,
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['font-smoothing', 'composes'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['input-placeholder', 'global', 'local'],
      },
    ],
  },
};
