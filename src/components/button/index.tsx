"use client";
import React, { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./_helpers/buttonVariants";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
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
    const Comp = asChild ? Slot : "button";
    const isFullLoading = isLoading && loadingPosition === "";

    function renderSpinner() {
      return (
        <span>
          <svg
            className="animate-spin"
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            viewBox='0 0 24 24'
          >
            <path d='M21 12a9 9 0 1 1-6.219-8.56'></path>
          </svg>
        </span>
      );
    }

    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({ variant, kind, size }),
          "cursor-pointer items-center text-center justify-center gap-1.5",
          block && "w-full",
          isFullLoading && "opacity-50 pointer-events-none",
          className
        )}
        disabled={isFullLoading}
        aria-busy={isLoading}
        {...props}
      >
        {isFullLoading ? (
          <>
            {renderSpinner()}
            {isLoadingText && <span>Loading...</span>}
            <span className="invisible ">{children || label}</span>
          </>
        ) : (
          <>
            {isLoading && loadingPosition === "left"
              ? renderSpinner()
              : iconPosition === "left" && !isLoading && icon}

            <span className={cn(isLoading && !isLoadingText ? "invisible" : "visible")}>
              {children || label}
            </span>

            {isLoading && loadingPosition === "right"
              ? renderSpinner()
              : iconPosition === "right" && !isLoading && icon}
          </>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";


// "use client";
// import React, { forwardRef } from "react";
// import { Slot } from "@radix-ui/react-slot";
// import { VariantProps } from "class-variance-authority";
// import { cn } from "@/lib/utils";
// import { buttonVariants } from "./_helpers/buttonVariants";

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//     VariantProps<typeof buttonVariants> {
//   label?: string;
//   asChild?: boolean;
//   isLoading?: boolean;
//   loadingPosition?: "left" | "right" | "full";
//   icon?: React.ReactNode;
//   iconPosition?: "left" | "right";
//   block?: boolean;
//   kind?: "solid";
//   isLoadingText?: boolean;
// }

// export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
//   (
//     {
//       icon,
//       iconPosition = "left",
//       block = false,
//       isLoading = false,
//       loadingPosition = "full",
//       isLoadingText,
//       kind = "solid",
//       label,
//       children,
//       className,
//       variant,
//       size,
//       asChild = false,
//       ...props
//     },
//     ref
//   ) => {
//     const Comp = asChild ? Slot : "button";
//     const isFullLoading = isLoading && loadingPosition === "full";
//     const isPartialLoading = isLoading && loadingPosition !== "full";

//     return (
//       <Comp
//         ref={ref}
//         className={cn(
//           buttonVariants({ variant, kind, size }),
//           "cursor-pointer inline-flex items-center justify-center gap-1.5",
//           block && "w-full",
//           isFullLoading && "opacity-50 pointer-events-none",
//           className
//         )}
//         disabled={isFullLoading}
//         {...props}
//       >
//         {/** Icon & Loading logic */}
//         {(loadingPosition === "left" || loadingPosition === "full") && isLoading ? (
//           <span className="animate-spin">🔄</span>
//         ) : (
//           iconPosition === "left" && icon
//         )}

//         {/** Label/Text logic */}
//         {isFullLoading ? (
//           isLoadingText ? "Loading." : "Loading.."
//         ) : (
//           children || label
//         )}

//         {/** Right-side Icon & Loading logic */}
//         {(loadingPosition === "right" || loadingPosition === "full") && isLoading ? (
//           <span className="animate-spin">🔄</span>
//         ) : (
//           iconPosition === "right" && icon
//         )}
//       </Comp>
//     );
//   }
// );

// Button.displayName = "Button";

// "use client"
// import React, { forwardRef } from "react"
// import { Slot } from "@radix-ui/react-slot"
// import { VariantProps } from "class-variance-authority"
// import { cn } from "@/lib/utils"

// import LoadingTextSwap from "./_helpers/LoadingTextSwap"
// import { buttonVariants } from "./_helpers/buttonVariants"

// export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//   VariantProps<typeof buttonVariants> {
//   label?: string
//   asChild?: boolean
//   isLoading?: boolean
//   loadingPosition?: "" | "left" | "right"
//   icon?: React.ReactNode
//   iconPosition?: "left" | "right"
//   block?: boolean
//   kind?: "solid"
//   isLoadingText?: boolean
// }

// export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
//   (
//     {
//       icon,
//       iconPosition = "left",
//       block = false,
//       isLoading = false,
//       loadingPosition = "",
//       kind = "solid",
//       label,
//       children,
//       className,
//       variant,
//       size,
//       asChild = false,
//       isLoadingText,
//       ...props
//     },
//     ref
//   ) => {
//     const Comp = asChild ? Slot : "button"

//     return (
//       <Comp
//         ref={ref}
//         className={cn(
//           buttonVariants({ variant, kind, size }),
//           "cursor-pointer inline-flex items-center justify-center",
//           block && "w-full",
//           className
//         )}
//         {...props}
//       >
//         <div className={`inline-flex gap-1.5 ${iconPosition === "right" ? "flex-row-reverse" : "flex-row"}`}>
//           {isLoading && iconPosition === "right" &&
//             icon
//           }
//           {children}

//           {isLoading && iconPosition === "right" &&
//             <span>...</span>
//           }
//         </div>
//       </Comp >
//     )
//   }
// )

// Button.displayName = "Button"

{/* <LoadingTextSwap
  isLoading={isLoading}
  loadingPosition={loadingPosition}
  isLoadingText={isLoadingText}
  className={`gap-1.5 ${iconPosition === "right" ? "flex-row-reverse" : "flex-row"}`}
>
  {icon}
  {children}
</LoadingTextSwap> */}