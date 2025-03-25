"use client";

import React, { forwardRef } from "react";
import Link, { LinkProps } from "next/link";

import { cn } from "@/lib/utils";

import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./_helpers/buttonVariants";

function renderSpinner() {
  return (
    <svg
      className="animate-spin size-4"
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

type ButtonBaseProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  tag?: "button";
};

type LinkBaseProps = Omit<LinkProps, "passHref"> & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  tag: "link";
  href: string;
};

export type ButtonProps = (ButtonBaseProps | LinkBaseProps) & VariantProps<typeof buttonVariants> & {
  label?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
  loadingPosition?: "" | "left" | "right";

  block?: boolean;
  kind?: "text" | "outline" | "solid";
  variant? : "primary",
  size? :"md",
};

type ButtonRef = HTMLButtonElement | HTMLAnchorElement;

const Button = forwardRef<ButtonRef, ButtonProps>(
  (
    {
      tag = "button",
      label,
      children,
      icon,
      iconPosition = "left",
      isLoading = false,
      loadingPosition = "",
      block = false,
      type = "button",
      disabled = false,

      kind = "solid",
      variant = "primary",
      size = "md",

      ...props
    },
    ref
  ) => {
    const isLink = tag === "link";
    const isLoadingFull = isLoading && loadingPosition === ""

    const Tag = (isLink ? Link : "button") as any;

    return (
      <Tag
        ref={ref}
        {...(isLink ? (props as LinkBaseProps) : (props as ButtonBaseProps))}
        {...(!isLink && { type, disabled })}
        aria-busy={isLoading}
        className={cn(buttonVariants({ variant, kind, size }), `
          relative inline-flex items-center justify-center min-w-8 cursor-pointer
          ${isLoadingFull ? "text-transparent" : ""} 
          ${block ? "w-full" : ""}
          ${disabled ? "opacity-25 cursor-default" : ""}
          `
        )}
      >
        {isLoadingFull && (
          <>
            <span className="absolute left-1/2 -translate-x-1/2 flex visible text-black">
              {renderSpinner()}
            </span>
            <span className="size-4"></span>
          </>
        )}

        {isLoading && loadingPosition === "left" && renderSpinner()}
        {iconPosition === "left" && !isLoading && icon && <span className="size-4">{icon}</span>}

        <span className={`contents ${isLoadingFull ? "invisible" : "visible"}`}>{children || label}</span>

        {isLoading && loadingPosition === "right" && renderSpinner()}
        {iconPosition === "right" && !isLoading && icon && <span className="size-4">{icon}</span>}
      </Tag>
    );
  }
);

Button.displayName = "Button";

export { Button };
