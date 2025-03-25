"use client";

import React, { forwardRef } from "react";
import { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./_helpers/buttonVariants";
import Link, { LinkProps } from "next/link";

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

type ButtonBaseProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  tag?: "button";
};

type LinkBaseProps = Omit<LinkProps, "passHref"> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    tag: "link";
    href: string;
  };

export type ButtonProps = (ButtonBaseProps | LinkBaseProps) &
  VariantProps<typeof buttonVariants> & {
    label?: string;
    children?: React.ReactNode;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    isLoading?: boolean;
    loadingPosition?: "" | "left" | "right";
    block?: boolean;
    kind?: "solid";
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
      kind = "solid",
      type = "button",
      ...props
    },
    ref
  ) => {
    const isLink = tag === "link";
    const Tag = (isLink ? Link : "button") as any;

    return (
      <Tag
        ref={ref}
        {...(isLink ? (props as LinkBaseProps) : (props as ButtonBaseProps))}
        {...(!isLink && { type })}
        aria-busy={isLoading}
        className={cn(`relative inline-flex items-center justify-center 
          ${isLoading && loadingPosition === "" ? "text-transparent" : ""} 
          ${block ? "w-full" : ""}`
        )}
      >
        {isLoading && loadingPosition === "" && (
          <span className="absolute left-1/2 -translate-x-1/2 flex visible text-black/30">
            {renderSpinner()}
          </span>
        )}

        {isLoading && loadingPosition === "left" && renderSpinner()}
        {children || label}
        {isLoading && loadingPosition === "right" && renderSpinner()}

        {icon && <span className="w-4 h-4">{icon}</span>}
      </Tag>
    );
  }
);

Button.displayName = "Button";

export { Button };
