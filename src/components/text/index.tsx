import { cva, type VariantProps } from "class-variance-authority";
import React, { type JSX } from "react";

export const textVariants = cva("font-sans text-indigo-900", {
  variants: {
    variant: {
      "body-md": "text-base leading-6 font-normal",
      "body-md-bold": "text-base leading-6 font-semibold",
      "body-lg": "text-lg leading-6 font-normal",
      "body-lg-bold": "text-lg leading-6 font-semibold",
      "body-7xl": "text-7xl tracking-[10px]",
      "body-xl": "text-xl leading-10",
    },
  },
  defaultVariants: {
    variant: "body-md",
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

const Text = ({
  as = "span",
  variant,
  className,
  children,
  ...props
}: TextProps) => {
  return React.createElement(
    as,
    { className: textVariants({ variant, className }), ...props },
    children,
  );
};

export default Text;
