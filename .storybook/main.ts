export default {
  stories: [
    "../app/**/*.mdx",
    "../app/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],

  framework: {
    name: "@storybook/react-vite",
    options: {
      builder: {
        viteConfigPath: "sb-vite.config.ts",
      },
    },
  },

  docs: {
    autodocs: true,
  },
};
