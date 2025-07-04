/** @type {import('stylelint').Configuration} */
module.exports = {
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-property-sort-order-smacss",
  ],
  plugins: ["stylelint-declaration-block-no-ignored-properties"],
  rules: {
    "plugin/declaration-block-no-ignored-properties": true,
    "color-hex-length": "short",
    "color-no-invalid-hex": true,
    "length-zero-no-unit": true,
    "declaration-block-no-duplicate-properties": [
      true,
      {
        ignore: ["consecutive-duplicates"],
      },
    ],
    "no-empty-source": null,
    "selector-pseudo-element-colon-notation": "double",
    "at-rule-no-unknown": [true, { ignoreAtRules: ["extend"] }],
    "font-family-no-duplicate-names": [
      true,
      {
        ignoreFontFamilyNames: ["monospace"],
      },
    ],
    "media-feature-name-value-no-unknown": [
      true,
      {
        ignoreValues: {
          "prefers-contrast": ["high", "more", "less", "no-preference"]
        }
      }
    ],
  },
};
