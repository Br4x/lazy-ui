const path = require("path");
const { loadConfigFromFile, mergeConfig } = require("vite");
const Inspect = require("vite-plugin-inspect");
const presetIcons = require("@unocss/preset-icons").default;
const presetUno = require("unocss").presetUno;
const Unocss = require("unocss/vite").default;

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "storybook-dark-mode",
  ],
  framework: "@storybook/vue3",
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config, _) {
    const { config: userConfig } = await loadConfigFromFile(
      path.resolve(__dirname, "../vite.config.ts")
    );
    config.resolve.alias["~"] = `${path.resolve(__dirname, "src")}/`;
    config.plugins.push(
      Unocss({
        presets: [presetUno(), presetIcons()],
      })
    );
    config.plugins.push(Inspect());
    return mergeConfig(config, {
      ...userConfig,
      // manually specify plugins to avoid conflict
      plugins: [],
    });
  },
};
