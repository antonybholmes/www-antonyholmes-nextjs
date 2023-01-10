---
title: "Simplifying class name strings"
description: "How to simplify conditional class name strings."
authors: ["Antony Holmes"]
categories: ["Web Development"]
tags: ["Tailwind", "Tutorials"]
related: ""
status: "published"
hero: "code"
---

Simplify class name strings without external libraries.

<!-- end -->

Using a class based approach for css, such as Tailwind can often mean long strings of class names. I created
this simple function to concatenate and deal with conditional renderings. Instead of writing strings such as `${x ? "y" : "z"}`
you can supply a list of strings or an array beginning with a boolean expression which can deal with conditionals.

```typescript
// class-names.ts

function _clean(cn: string) {
  // replace multi spaces globally and ignore new lines
  return cn.replace(/(\s+|\r\n|\n|\r)/gm, " ").trim()
}

type CSSClass =
  | string
  | CSSClass[]
  | [boolean, CSSClass]
  | [boolean, CSSClass, CSSClass]
  | undefined

function _cn(arg: CSSClass, classes: string[]) {
  if (!arg) {
    return
  }

  if (Array.isArray(arg)) {
    if (arg.length > 0) {
      if (typeof arg[0] === "boolean") {
        switch (arg.length) {
          case 1:
            // nonsense so ignore
            break
          case 2:
            // only render if true
            if (arg[0]) {
              _cn(arg[1], classes)
            }
            break
          default:
            // conditionally render
            arg[0] ? _cn(arg[1], classes) : _cn(arg[2], classes)
            break
        }
      } else {
        arg.forEach(arg => _cn(<CSSClass>arg, classes))
      }
    }
  } else {
    const argType = typeof arg

    if (argType === "string" || argType === "number") {
      classes.push(arg)
    }
  }
}

/**
 * Concatenates strings of class names together to form a class name string.
 * Useful for breaking up long tailwind class strings.
 * Also adds conditional rendering. [condition, 'classes'] will only add the
 * classes if condition is true. [condition, 'classes1', 'classes2'] adds
 * classes1 or classes2 conditionally. Also supports recursive conditionals.
 * [condition1, [condition2, 'classes1', 'classes2'], 'classes3'].
 *
 * @param args string or array of strings of classnames. Also supports condition c
 * @returns a space separated string of class names.
 */
export function cn(...args: CSSClass[]): string {
  const classes: string[] = []

  _cn(args, classes)

  // join all the pieces into one then split on space
  // and remove duplicates
  return _clean(classes.join(" "))
}

/**
 * Concatenates strings of class names together to form a class name string.
 * Useful for breaking up long tailwind class strings. This variant keeps
 * only unique names in the order they appear.
 * Also adds conditional rendering. [condition, 'classes'] will only add the
 * classes if condition is true. [condition, 'classes1', 'classes2'] adds
 * classes1 or classes2 conditionally. Also supports recursive conditionals.
 * [condition1, [condition2, 'classes1', 'classes2'], 'classes3'].
 *
 * @param args string or array of strings of classnames. Also supports condition c
 * @returns a space separated string of class names.
 */
export function cnu(...args: CSSClass[]): string {
  const used = new Set<string>()

  const classes: string[] = []

  _cn(args, classes)

  // join all the pieces into one then split on space
  // and remove duplicates
  return _clean(
    classes
      .filter(c => {
        // keep track of tokens already seen
        const ret = !used.has(c) && c !== "" && c !== " "
        used.add(c)
        return ret
      })
      .join(" ")
  )
}

export default cn
```

In the example the arrays containing 3 elements where the first element is a boolean. such as `[show2, "p4", "p5"]` will conditionally add class `p4` or `p5` depending on whether `show2` is `true`. You can nest these expressions to create more complex one line conditional expressions that do not require cumbersome string interpolations, for example `[show, [show2, "p4", "p5"], "p6"]`, if `show` is `true`, then add class `p4` or `p5` depending on whether `show2` is `true`.

```typescript
// component.tsx

import cn from "../lib/class-names"

...
const show = true
const show2 = true
const show3 = true


return(<div className={cn("p1 p2", "p3", [show, [show2, "p4", "p5"], "p6"], [show3, "p7"])}>)
```
