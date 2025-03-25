import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center duration-75 justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-white text-text shadow-button border border-gray-400",
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        warning: "bg-red-500 text-primary-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        destructive: "bg-destructive text-white",
        monochrome: "bg-black text-white border border-gray-900",
      },
      kind: {
        outline: "bg-transparent border border-current shadow-[0_0_0_1px_currentColor]",
        text: "shadow-none bg-transparent border border-transparent",
        solid: "",
      },
      size: {
        slim: "text-sm",
        medium: "text-sm",
        large: "text-base",
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
        kind: "outline",
        variant: "primary",
        className: "text-primary",
      },
      {
        kind: "plain",
        variant: "primary",
        className: "text-primary",
      },
      // ======================================
      // Monochrome
      // ======================================
      {
        kind: "solid",
        size: "medium",
        variant: "monochrome",
        className: "hover:bg-[#262626]"
      },
      {
        kind: "outline",
        size: "medium",
        variant: "monochrome",
        className: "border border-black text-black hover:bg-gray-100"
      },
      // ======================================
      // Other
      // ======================================
      {
        kind: "outline",
        variant: "destructive",
        className: "text-destructive",
      },
      {
        kind: "outline",
        variant: "warning",
        className: "text-red-500",
      },
      {
        kind: "outline",
        size: "slim",
        className: "px-3 py-[3px]",
      },
      // Kinds
      // ========================================
      {
        kind: "outline",
        size: "medium",
        className: "px-5 py-3",
      },
      {
        kind: "solid",
        size: "medium",
        className: "px-5 py-3",
      },
      {
        kind: "outline",
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
      size: "medium",
    },
  });
