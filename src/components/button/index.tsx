import { cva, type VariantProps } from "class-variance-authority";
import Text from "../text";

export const buttonVariants = cva(
  "flex items-center justify-center cursor-pointer transition rounded-full group gap-2",
  {
    variants: {
      variant: {
        primary: "bg-zinc-950 hover:bg-zinc-50",
      },
      size: {
        md: "h-10 py-4 px-5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export const buttonTextVariants = cva("transition duration-300", {
  variants: {
    variant: {
      primary: "text-zinc-50 group-hover:text-zinc-950",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface ButtonProps
  extends
    Omit<React.ComponentProps<"button">, "size">,
    VariantProps<typeof buttonVariants> {}

const Button = ({
  variant,
  className,
  size,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button className={buttonVariants({ variant, size, className })} {...props}>
      <Text variant="body-md-bold" className={buttonTextVariants({ variant })}>
        {children}
      </Text>
    </button>
  );
};

export default Button;
