import IFieldMap from "../interfaces/field-map"

export function getTitleMap(items: string[][]) {
  const contextMap: IFieldMap = {}

  for (let i = 0; i < items.length; ++i) {
    let tokens = items[i]
    let context = "default"
    let name = ""
    if (tokens.length > 1) {
      if (tokens[0] !== "") {
        context = tokens[0]
      }
      name = tokens[1]
    } else {
      name = tokens[0]
    }

    // The first item we encounter is always added in the default
    // context
    if (i === 0) {
      contextMap["default"] = name
    }

    contextMap[context] = name
  }

  return contextMap
}

export default getTitleMap
