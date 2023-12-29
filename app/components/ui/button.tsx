import { ark, HTMLArkProps } from '@ark-ui/react/factory'
import { tv, type VariantProps } from 'tailwind-variants'
import { styled } from '../utils/styles'

type ButtonVariantProps = VariantProps<typeof styles>
export type ButtonProps = ButtonVariantProps & HTMLArkProps<'button'>

const styles = tv({
  base: 'appearance-none inline-flex rounded-md items-center cursor-pointer font-semibold min-w-0 justify-center outline-none transition-all select-none align-middle whitespace-nowrap',
  defaultVariants: { variant: 'solid', size: 'md' },
  variants: {
    variant: {
      solid: 'bg-slate-700 text-white',
    },
    size: {
      md: 'h-10 min-w-10 text-sm gap-2 px-4',
    },
  },
})
export const Button = styled<ButtonProps>(ark.button, styles)