# Arek UI: [tailwindCSS](https://tailwindcss.com/) + [Ark UI](https://ark-ui.com/)

Copy paste components to your project.

### Inspired by:

https://ui.shadcn.com/

https://park-ui.com/

https://chakra-ui.com/

### Supported frameworks:

React https://arek-ui.fly.dev/

SolidJs https://arek-ui-solid.fly.dev/

Only Typescript Supported!

### Setup:

- React:
- setup tailwind css - https://tailwindcss.com/docs/installation
- copy over the [tailwind config](tailwind.config.ts)
- copy over the [utils folder](/app/components/utils/), it contains three key files:
  - [cn](/app/components/utils/cn.ts) - merges tailwind class names
  - [styled](/app/components/utils/styled.tsx) - wraps a component in a tailwind variants recipe and adds a new `unstyled` prop
  - [create-styled-context](/app/components/utils/create-styled-context.tsx) - wraps root component and its slots in a tailwind variants recipe, adds `classes` and `unstyled` props to the root, and `unstyled` prop to the child slots
- use the [base css for tailwind](/app/tailwind.css)
- `install --dev tailwind-animate @savvywombat/tailwindcss-grid-areas`
- `install @ark-ui/react clsx tailwind-variants tailwind-merge`
- the default icons used are `lucide-react`, you need to install those for some components
- some components require individual dependencies like `@radix-ui/react-aspect-ratio`, `match-sorter` or `react-day-picker`, you need to install those to use them
