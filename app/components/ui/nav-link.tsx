import { NavLinkProps as NLP, NavLink as NL } from "@remix-run/react";
import { ReactNode, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";

type NavLinkProps = NLP & { asChild?: boolean; children?: ReactNode };

export const NavLink = forwardRef<HTMLInputElement, NavLinkProps>(
  function NavLink(props, ref) {
    const { asChild, children, ...navLinkProps } = props;

    const Comp = asChild ? Slot : "button";

    return (
      <NL {...navLinkProps}>
        {(options) => {
          console.log({ options });
          return <button>test</button>;
        }}
      </NL>
    );
  },
);
