import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bari-teal focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-white",
  {
    variants: {
      variant: {
        default: "bg-bari-teal text-white hover:bg-bari-teal/90",
        cta: "bg-bari-orange text-white hover:bg-bari-orange/90",
        outline: "border border-bari-teal text-bari-teal hover:bg-bari-teal/10",
        ghost: "hover:bg-bari-teal/10 text-bari-teal",
        link: "underline-offset-4 hover:underline text-bari-teal",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-full",
        lg: "h-11 px-8 rounded-full",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
