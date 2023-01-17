import IFieldMap from "../interfaces/field-map"
import { clean } from "./class-names"

export function _tws(key: string, value: any, prefix: string = "") {
  return `${prefix !== "" ? `${prefix}:` : ""}${key}${
    value !== "" ? `-${value}` : ""
  }`
}

/**
 * Create tailwind strings from objects so structured key value
 * pairs can be used to construct complex tailwind strings.
 *
 * @param allClassObj
 * @param classes
 * @param prefix
 * @returns
 */
function _tw(allClassObj: IFieldMap, classes: string[], prefix: string = "") {
  if (!allClassObj) {
    return
  }

  for (const [key, value] of Object.entries(allClassObj)) {
    if (Array.isArray(value)) {
      // deal with keys with multiple values such as supplying
      // border-t and border-slate-100
      value.forEach(v => _tw({ [key]: v }, classes, prefix))
    } else {
      const t = typeof value

      switch (t) {
        case "string":
        case "number":
          classes.push(_tws(key, value, prefix))
          break
        case "object":
          _tw(value, classes, key)
          break
        default:
          // do nothing
          break
      }
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
export default function tw(...allClassObjs: IFieldMap[]): string {
  const classes: string[] = []

  allClassObjs.forEach((allClassObj: IFieldMap) => _tw(allClassObj, classes))

  // join all the pieces into one then split on space
  // and remove duplicates
  return clean(classes.filter(x => x !== "").join(" "))
}
