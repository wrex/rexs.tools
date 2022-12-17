// postcss.config.js
const postcssJitProps = require("postcss-jit-props");
const postcssPresetEnv = require("postcss-preset-env");

const OpenProps = require("open-props");

module.exports = {
  plugins: [postcssPresetEnv(), postcssJitProps(OpenProps)],
};
