"use client";

import "./styles.css";

import React, { forwardRef } from "react";
import { Slot } from "radix-ui";
import { VariantProps } from "class-variance-authority";

import { cn } from "@perfactus/lib";

import { buttonVariants } from "./buttonVariants";
import { renderSpinner } from "./spinner";

type ButtonBaseProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = ButtonBaseProps &
  VariantProps<typeof buttonVariants> & {
    label?: string;
    children?: React.ReactNode;
    disabled?: boolean;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    isLoading?: boolean;
    loadingPosition?: "" | "left" | "right";
    loadingText?: string;
    block?: boolean;
    cursor?: boolean;
    asChild?: boolean;
    leftElement?: React.ReactNode;
    rightElement?: React.ReactNode;
  };

const Button = forwardRef<HTMLElement, ButtonProps>(
  (
    {
      label,
      children,
      icon,
      iconPosition = "left",
      isLoading = false,
      loadingPosition = "",
      loadingText = "",
      block = false,
      type = "button",
      disabled = false,
      kind,
      variant,
      size,
      cursor = true,
      asChild = false,
      leftElement,
      rightElement,
      ...props
    },
    ref
  ) => {
    const isLoadingFull = isLoading && loadingPosition === "";
    const isCustomTextLoading = isLoading && loadingText;

    const buttonClass = cn(
      buttonVariants({ variant, kind, size }),
      `
        relative inline-flex items-center justify-center cursor-pointer gap-1.5 
        ${cursor ? "cursor-pointer" : "cursor-default"}
        ${isLoadingFull ? "text-transparent" : ""} 
        ${block ? "w-full" : ""}
        ${disabled ? "opacity-25 cursor-default" : ""}
      `,
      props.className
    );

    const Comp = asChild ? Slot.Root : "button" as React.ElementType;
    const isButton = !asChild

    return (
      <Comp
        ref={ref} {...props}
        {...(isButton && { type, disabled })}
        aria-busy={isLoading}
        className={buttonClass}
      >
        {leftElement && <span className="left-element">{leftElement}</span>}

        {isLoadingFull && (
          <span className="absolute left-1/2 -translate-x-1/2 flex visible text-black">
            {renderSpinner()}
          </span>
        )}

        {isLoading && loadingPosition === "left" && renderSpinner()}
        {icon && iconPosition === "left" && loadingPosition !== "left" && <span className={`size-4 ${isLoadingFull ? "invisible" : "visible"}`}>{icon}</span>}

        {!isCustomTextLoading && (children || label) && (
          <Slot.Slottable>{children || label}</Slot.Slottable>
        )}
        
        {isCustomTextLoading && <span className="contents">{loadingText}</span>}

        {isLoading && loadingPosition === "right" && renderSpinner()}
        {icon && iconPosition === "right" && loadingPosition !== "right" && <span className={`size-4 ${isLoadingFull ? "invisible" : "visible"}`}>{icon}</span>}

        {rightElement && <span className="right-element">{rightElement}</span>}

      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button };
