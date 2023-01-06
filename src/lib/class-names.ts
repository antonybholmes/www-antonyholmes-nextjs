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
    // .split(" ")
    // .filter(c => {
    //   // keep track of tokens already seen
    //   const ret = !used.has(c)
    //   used.add(c)
    //   return ret
    // })
    // .join(" ")
  )
}
