import { ReactNode } from "react"
import { cn } from "@/lib/utils"

export default function LoadingTextSwap({
  isLoading,
  children,
  className,
  loadingPosition,
  isLoadingText
}: {
  isLoading?: boolean
  children: ReactNode
  className: string
}) {
  return (
    <div className={`grid items-center justify-items-center ${loadingPosition === "left" ? "" : ""} `}>
      <div
        className={cn(
          `inline-flex items-center ${className} col-start-1 col-end-2 row-start-1 row-end-2`,
          isLoading && !isLoadingText ? "invisible" : "visible"
        )}
      >
        {children}
      </div>

      <div
        className={cn(
          "col-start-1 col-end-2 row-start-1 row-end-2 text-center",
          isLoading ? "visible" : "invisible"
        )}
      >
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
      </div>
    </div>
  )
}
