---
title: "Simplifying Tailwind class name strings"
description: "How to simplify conditional class name strings."
authors: ["Antony Holmes"]
readtime: "1 min"
section: "Programming"
tags: ["Typescript", "Preact", "React"]
related: ""
status: "published"
hero: "generic3"
---

Simplify class name strings without external libraries.

<!-- end -->

Using a class based approach for css, such as Tailwind can often mean long strings of class names. I created
this simple function to concatenate and deal with conditional renderings. Instead of writing strings such as `${x ? "y" : "z"}`
you can supply a list of strings or an array beginning with a boolean expression which can deal with conditionals.



```typescript
// class-names.ts

export function clean(cn: string) {
  // replace multi spaces globally and ignore new lines
  return cn.replace(/(\s+|\r\n|\n|\r)/gm, " ").trim()
}

type CSSClass =
  | string
  | CSSClass[]
  | [boolean, CSSClass]
  | [boolean, CSSClass, CSSClass]
  | undefined

function _cn(args: CSSClass | CSSClass[], classes: string[]) {
  if (!args) {
    return
  }

  if (Array.isArray(args)) {
    if (typeof args[0] === "boolean") {
      switch (args.length) {
        case 2:
          if (args[0]) _cn(args[1], classes)
          break
        case 3:
          args[0] ? _cn(args[1], classes) : _cn(args[2], classes)
          break
        default:
          break
      }
    } else {
      args.forEach(arg => _cn(<CSSClass[]>arg, classes))
    }
  } else {
    classes.push(args)
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
export default function cn(...args: CSSClass[]): string {
  const used = new Set<string>()
  const classes: string[] = []

  _cn(args, classes)

  // join all the pieces into one then split on space
  // and remove duplicates
  return clean(
    classes.filter(x => x !== "").join(" ")
  )
}
```

In the example the arrays containing 3 elements where the first element is a boolean. such as ```[show2, "p4", "p5"]``` will conditionally add class ```p4``` or ```p5``` depending on whether ```show2``` is ```true```. You can nest these expressions to create more complex one line conditional expressions that do not require cumbersome string interpolations, for example ```[show, [show2, "p4", "p5"], "p6"]```, if ```show``` is ```true```, then add class ```p4``` or ```p5``` depending on whether ```show2``` is ```true```.

```typescript
// component.tsx

import cn from "../lib/class-names"

...
const show = true
const show2 = true
const show3 = true


return(<div className={cn("p1 p2", "p3", [show, [show2, "p4", "p5"], "p6"], [show3, "p7"])}>)
```

