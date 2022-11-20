import IFieldMap from "../interfaces/field-map"

function getContextMap(items: string[]) {
  const contextMap: IFieldMap = {}

  for (let i = 0; i < items.length; ++i) {
    let item = items[i]
    const tokens = item.split("::")
    let context = "default"
    let name = ""
    if (tokens.length > 1) {
      context = tokens[0]
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

export default getContextMap
