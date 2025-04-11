"use client";

import "./styles.css"

import React, { forwardRef } from "react";
import Link, { LinkProps } from "next/link";

import { cn } from "../../../lib/src/utils";

import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./buttonVariants";

function renderSpinner() {
  return (
    <svg
      className="animate-spin size-4 text-pink-500"
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
  loadingText?: string;

  block?: boolean;
  kind?: "text" | "outlined" | "solid";
  variant?: "primary" | "secondary",
  size?: "xs" | "sm" | "md" | "lg" | "xl",

  cursor?: boolean;
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
      loadingText = "",
      block = false,
      type = "button",
      disabled = false,

      kind = "solid",
      variant = "primary",
      size = "md",
      cursor = true,

      ...props
    },
    ref
  ) => {
    const isLink = tag === "link";
    const isLoadingFull = isLoading && loadingPosition === ""
    const isCustomTextLoading = isLoading && loadingText

    const Tag = (isLink ? Link : "button") as any;

    return (
      <Tag
        ref={ref}
        {...(isLink ? (props as LinkBaseProps) : (props as ButtonBaseProps))}
        {...(!isLink && { type, disabled })}
        aria-busy={isLoading}
        //@ts-ignore
        className={cn(buttonVariants({ variant, kind, size }),`
          relative inline-flex items-center justify-center cursor-pointer gap-1.5
          ${cursor ? "cursor-pointer" : "cursor-default"}
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
          </>
        )}

        {isLoading && loadingPosition === "left" && renderSpinner()}
        {icon && iconPosition === "left" && loadingPosition !== "left" && <span className="size-4">{icon}</span>}

        {isCustomTextLoading ? "" : <span className={`contents ${isLoadingFull ? "invisible" : "visible"}`}>{children || label}</span>}
        {isCustomTextLoading && <span className="contents">{loadingText}</span>}

        {isLoading && loadingPosition === "right" && renderSpinner()}
        {icon && iconPosition === "right" && loadingPosition !== "right" && <span className="size-4">{icon}</span>}
      </Tag>
    )
  }
);

Button.displayName = "Button";

export { Button };
