import type { Preview, ReactRenderer } from "@storybook/react";
import "../app/tailwind.css";

import { withThemeByClassName } from "@storybook/addon-themes";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: {
        // nameOfTheme: 'classNameForTheme',
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
