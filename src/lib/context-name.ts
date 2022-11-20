import IFieldMap from "../interfaces/field-map"

function getContextName(
  contextMap: IFieldMap,
  context: string = "",
  strictMode: boolean = false
): string {
  let ret

  if (context in contextMap) {
    ret = contextMap[context]
  } else if ("default" in contextMap && !strictMode) {
    ret = contextMap["default"]
  } else {
    ret = ""
  }

  return ret
}

export default getContextName
