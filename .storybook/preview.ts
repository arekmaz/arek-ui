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
    sourceLinkPrefix:
      "https://github.com/arekmaz/arek-ui/blob/main/app/components/ui/",
  },

  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: {
        // nameOfTheme: 'classNameForTheme',
        Light: "",
        Dark: "dark",
      },
      defaultTheme: "Light",
    }),
  ],
};

export default preview;
