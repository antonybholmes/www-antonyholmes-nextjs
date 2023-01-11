import React from "react"
import IChildProps from "../interfaces/child-props"
import cn from "../lib/class-names"

export default function PostLayout({ className, children }: IChildProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-x-0 lg:grid-cols-12 lg:gap-x-8 xl:grid-cols-16 2xl:gap-x-16",
        className
      )}
    >
      <section className="col-span-1 hidden lg:block">{children[0]}</section>
      <article className="col-span-11">{children[1]}</article>
      <section className="col-span-4 hidden xl:block">{children[2]}</section>
    </div>
  )
}
