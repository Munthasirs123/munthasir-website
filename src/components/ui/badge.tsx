import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  // Base styles applied to all badges
  "inline-flex items-center rounded-lg border-2 border-blackish px-3 py-1 text-sm font-bold shadow-[3px_3px_0px_#1A1A1A]",
  {
    variants: {
      variant: {
        // We define a variant for each of our brand colors
        default: "bg-cream text-blackish",
        mustard: "bg-mustard text-blackish",
        teal: "bg-teal text-blackish",
        tangerine: "bg-tangerine text-blackish",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }