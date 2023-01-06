---
title: "Make a Web UI toggle switch"
description: "How to make a simple toggle switch using Preact."
authors: ["Antony Holmes"]
readtime: "1 min"
section: "Tutorial"
tags: ["Typescript", "Preact", "React", "SVG"]
related: ""
status: "published"
hero: "generic4"
---

Let's make a simple UI toggle switch using Preact and SVG. No need for some huge library dependency.

<!-- end -->

I like to delve into making base UI components using minimal amounts of code and not have to rely on some third party library with an inevitably questionable API.

I like to use Preact for my site since it mostly works as a drop in replacement for React and is smaller and faster, but this also means that some third party React libraries just won't work. Rather than waste time on trying to fix issues, I sometimes find it easier to just create simple components from scratch so I can precisely control the look and feel.

This is a tutorial on making an animated toggle switch using Preact, Tailwind and SVG. You can of course use regular CSS, but I prefer Tailwind's class based approach. This tutorial assumes you have Tailwind and Preact working in your environment.

I work with Typescript (I dislike Javascript's lack of a type checking system so I think TS is an acceptable superset of the language).

# Interfaces

First let's setup some interfaces to describe the parameters the toggle can accept. You may need to modify this to meet your needs. I like to use separate, reusable interfaces, but you could easily combine these into one file.

```typescript
// class-props.ts

export default interface IClassProps {
  className?: string
  style?: {}
}
```

```typescript
// children-props.ts

import IClassProps from "./class-props"

export default interface IChildrenProps extends IClassProps {
  children?: any
}
```

Put everything together to make a toggle props interface. We want to pass if the toggle is selected and supply a call back onClick function so the toggle can pass back a state change to the parent.

```typescript
// toggle-props.ts

import IChildrenProps from "./children-props"

export interface IToggleProps extends IChildrenProps {
  index?: number
  isSelected: boolean
  onClick: (index: number, selected: boolean) => void
}
```

# SCSS/CSS

I like to standardize animation timings so I created a simple global CSS class that applies default tailwind animation properties to a class. I like to use 300ms timings which I find the most aesthetically pleasing. You can see animations move smoothly, but without taking so long that the UI feels sluggish.

If you are using a framework such as Astro/Next/Gatsby, you will probably have a global CSS file for situations Tailwind doesn't cover very well. This is an example of what I do with my global main.scss in Astro.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

...

.transition-ani {
  @apply duration-300 ease-in-out;
}
```

# Tailwind

You need to modify your Tailwind config and extend the theme to add a custom translate property for the toggle.

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  ...
  theme: {
    extend: {
      ...
      translate: {
        'toggle':'8px'
      },
    },
  },
  plugins: [],
}
```

# The Toggle

The toggle is a simple component containing the SVG and some event handling. The SVG which consists of a rounded rectangle with a circular switch on top. The circular switch has animated movement and the rounded rect changes color depending on whether the toggle is on or not. The toggle is scalable, but the look and feel was based on using Tailwind's w-9 width property.

[class-names](/blog/2023-01-01-class-names) is a custom function I created for merging css class names into a single string and simplifying conditional rendering.

```typescript
// toggle-switch.tsx

import cn from "class-names"
import type IToggleProps from "./toggle-props"

export default function ToggleSwitch({
  index = -1,
  isSelected,
  onClick,
  className,
  children,
}: IToggleProps) {
  return (
    <button
      onClick={() => onClick(index, !isSelected)}
      className={cn(
        "group flex cursor-pointer flex-row items-center justify-between gap-x-4",
        className
      )}
    >
      <div>{children}</div>

      <svg
        viewBox="0 0 24 16"
        xmlns="http://www.w3.org/2000/svg"
        className="w-9"
      >
        <rect
          width="24"
          height="16"
          rx="8"
          className={cn("transition-ani transition-colors", [
            isSelected,
            "fill-blue-600",
            "fill-slate-200 group-hover:fill-slate-300",
          ])}
        />
        <circle
          cx="8"
          cy="8"
          r="7"
          className={cn("transition-ani fill-white transition-transform", [
            isSelected,
            "translate-x-toggle",
          ])}
        />
      </svg>
    </button>
  )
}
```
