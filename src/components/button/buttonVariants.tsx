import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  `rounded-button-radius border border-transparent
   inline-flex items-center duration-75 transition-colors focus-visible:outlined-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`,
  {
    variants: {
      variant: {
        primary: "bg-button-primary-background border-button-primary-border text-button-primary-foreground hover:bg-primary/50",
        secondary: "bg-button-secondary-background border-button-secondary-border text-button-secondary-foreground hover:bg-secondary/50",
      },
      kind: {
        outlined: "bg-transparent",
        text: "bg-transparent border-transparent hover:bg-transparent",
        solid: "",
      },
      size: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-md",
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",

      },
      fullWidth: {
        true: "w-full",
      },
      // disabled: {
      //   true: "bg-surfaceDisabled text-textDisabled",
      // },
    },
    compoundVariants: [
      // ======================================
      // Primary
      // ======================================
      {
        kind: "outlined",
        variant: "primary",
        className: "text-primary",
      },
      {
        kind: "text",
        variant: "primary",
        className: "text-primary",
      },
      // ======================================
      // Monochrome
      // ======================================
      {
        kind: "solid",
        size: "base",
        variant: "monochrome",
        className: "hover:bg-[#262626]"
      },
      {
        kind: "outlined",
        size: "base",
        variant: "monochrome",
        className: "border border-black text-black hover:bg-gray-100"
      },
      // ======================================
      // Other
      // ======================================
      {
        kind: "outlined",
        variant: "destructive",
        className: "text-destructive",
      },
      {
        kind: "outlined",
        variant: "warning",
        className: "text-red-500",
      },
      {
        kind: "outlined",
        size: "slim",
        className: "px-3 py-[3px]",
      },
      // Kinds
      // ========================================
      {
        kind: "outlined",
        size: "base",
        className: "px-5 py-3",
      },
      {
        kind: "solid",
        size: "base",
        className: "px-5 py-3",
      },
      {
        kind: "outlined",
        size: "large",
        className: "px-5 py-3",
      },
      // Solid
      // ======================================
      {
        kind: "solid",
        size: "slim",
        className: "px-3 py-[3px]",
      },
      {
        kind: "solid",
        size: "large",
        className: "px-5 py-3",
      },
      // Text
      // ======================================
      {
        kind: "text",
        variant: "destructive",
        className: "text-destructive",
      },
      // {
      //   disabled: true,
      //   variant: "default",
      //   className: "border-borderDisabled",
      // },
    ],
    defaultVariants: {
      variant: "monochrome",
      size: "base",
    },
  });
