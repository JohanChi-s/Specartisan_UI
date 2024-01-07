import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/shared/utils/string"
import { ButtonProps, buttonVariants } from "@/shared/components/button"

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("tailwind.config.tsmx-auto tailwind.config.tsflex tailwind.config.tsw-full tailwind.config.tsjustify-center", className)}
    {...props}
  />
)

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("tailwind.config.tsflex tailwind.config.tsflex-row tailwind.config.tsitems-center tailwind.config.tsgap-1", className)}
    {...props}
  />
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("tailwind.config.ts", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <PaginationItem>
    <a
      aria-current={isActive ? "page" : undefined}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        className
      )}
      {...props}
    />
  </PaginationItem>
)
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("tailwind.config.tsgap-1 tailwind.config.tspl-2.5", className)}
    {...props}
  >
    <ChevronLeft className="tailwind.config.tsh-4 tailwind.config.tsw-4" />
    <span>Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("tailwind.config.tsgap-1 tailwind.config.tspr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="tailwind.config.tsh-4 tailwind.config.tsw-4" />
  </PaginationLink>
)

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("tailwind.config.tsflex tailwind.config.tsh-9 tailwind.config.tsw-9 tailwind.config.tsitems-center tailwind.config.tsjustify-center", className)}
    {...props}
  >
    <MoreHorizontal className="tailwind.config.tsh-4 tailwind.config.tsw-4" />
    <span className="tailwind.config.tssr-only">More pages</span>
  </span>
)

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
