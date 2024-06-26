const postcssPresetEnv = require("postcss-preset-env");
const postcssCustomMediaGenerator = require("postcss-custom-media-generator");

module.exports = {
  plugins: [
    postcssCustomMediaGenerator({
      mobile: 959,
      large: 960
    }),
    postcssPresetEnv(),
  ],
};
