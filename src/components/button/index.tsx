"use client";
import React, { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./_helpers/buttonVariants";
import Link from "next/link";

export interface LinkProps {
  // target, href, path?
}
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  tag?: "button" | "link";
  label?: string;
  asChild?: boolean;
  isLoading?: boolean;
  loadingPosition?: "" | "left" | "right";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  block?: boolean;
  kind?: "solid";
  isLoadingText?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      tag = "button",
      label,
      children,
      icon,
      iconPosition = "left",
      block = false,
      isLoading = false,
      loadingPosition = "",
      kind = "solid",
      variant,
      size,
      asChild = false,
      isLoadingText = false,
      className,
      ...props
    },
    ref
  ) => {
    const Comp = as === "link" ? Link : "button";
    const isFullLoading = isLoading && loadingPosition === "";

    function renderSpinner() {
      return (
        <svg
          className="animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
        </svg>
      );
    }

    return (
      <Comp
        ref={ref}
        {...(tag === "button" ? { type: "button" } : {})}
        disabled={isFullLoading}
        aria-busy={isLoading}
        className={cn(
          buttonVariants({ variant, kind, size }),
          `relative inline-flex items-center justify-center ${isLoading && loadingPosition === "" ? "text-transparent" : ""}`
        )}
        {...props}
      >
        <>
          {isLoading && loadingPosition === "" && (
            <span className="contents">
              <span className="absolute left-1/2 -translate-x-1/2 flex visible text-black/30">
                {renderSpinner()}
              </span>
            </span>
          )}

          {isLoading && loadingPosition !== "" && loadingPosition === "left" && (renderSpinner())}
          {children ? children : label}
          {isLoading && loadingPosition !== "" && loadingPosition === "right" && (renderSpinner())}

          {icon && <span className="w-4 h-4">{icon}</span>}
        </>
      </Comp>
    );
  }
);

Button.displayName = "Button";
