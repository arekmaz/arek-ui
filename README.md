# Arek UI

## tailwind + ark-ui

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
- use the [base css for tailwind](/app/tailwind.css)
- `install --dev tailwind-animate @savvywombat/tailwindcss-grid-areas`
- `install @ark-ui/react clsx tailwind-variants tailwind-merge`
- the default icons used are `lucide-react`, you need to install those for some components
- some components require individual dependencies like `@radix-ui/react-aspect-ratio`, `match-sorter` or `react-day-picker`, you need to install those to use them
