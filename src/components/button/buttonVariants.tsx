import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  `rounded-button-radius border border-transparent
   inline-flex items-center duration-75 transition-colors focus-visible:outlined-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`,
  {
    variants: {
      variant: {
        primary: "bg-button-primary-background border-button-primary-border hover:bg-primary/90",
        secondary: "bg-button-secondary-background border-button-secondary-border hover:bg-secondary/50",
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
        kind: "text",
        variant: "primary",
        className: `
          bg-button-primary-text-background hover:bg-button-primary-text-background-hover 
          text-button-primary-text-foreground hover:text-button-primary-text-foreground-hover
          border-button-primary-text-border hover:border-button-primary-text-border-hover
        `,
      },
      {
        kind: "solid",
        variant: "primary",
        className: `
          bg-button-primary-solid-background hover:bg-button-primary-solid-background-hover 
          text-button-primary-solid-foreground hover:text-button-primary-solid-foreground-hover
          border-button-primary-solid-border hover:border-button-primary-solid-border-hover
        `,
      },
      {
        kind: "outlined",
        variant: "primary",
        className: `
          bg-button-primary-outlined-background hover:bg-button-primary-outlined-background-hover 
          text-button-primary-outlined-foreground hover:text-button-primary-outlined-foreground-hover
          border-button-primary-outlined-border hover:border-button-primary-outlined-border-hover
        `,
      },
      // ======================================
      // Secondary
      // ======================================
      {
        kind: "text",
        variant: "secondary",
        className: `
          bg-button-secondary-text-background hover:bg-button-secondary-text-background-hover 
          text-button-secondary-text-foreground hover:text-button-secondary-text-foreground-hover
          border-button-secondary-text-border hover:border-button-secondary-text-border-hover
        `,
      },
      {
        kind: "solid",
        variant: "secondary",
        className: `
          bg-button-secondary-solid-background hover:bg-button-secondary-solid-background-hover 
          text-button-secondary-solid-foreground hover:text-button-secondary-solid-foreground-hover
          border-button-secondary-solid-border hover:border-button-secondary-solid-border-hover
        `,
      },
      {
        kind: "outlined",
        variant: "secondary",
        className: `
          bg-button-secondary-outlined-background hover:bg-button-secondary-outlined-background-hover 
          text-button-secondary-outlined-foreground hover:text-button-secondary-outlined-foreground-hover
          border-button-secondary-outlined-border hover:border-button-secondary-outlined-border-hover
        `,
      },

      // Kinds
      // ========================================
      {
        kind: "outlined",
        size: "base",
        className: "",
      },
      {
        kind: "solid",
        size: "base",
        className: "",
      },
      {
        kind: "outlined",
        size: "lg",
        className: "",
      },
      // Solid
      // ======================================
      {
        kind: "solid",
        size: "md",
        className: "",
      },
      {
        kind: "solid",
        size: "lg",
        className: "",
      },
      // Text
      // ======================================
      // {
      //   kind: "text",
      //   variant: "destructive",
      //   className: "text-destructive",
      // },
      // {
      //   disabled: true,
      //   variant: "default",
      //   className: "border-borderDisabled",
      // },
    ],
    defaultVariants: {
      variant: "primary",
      size: "base",
    },
  });
