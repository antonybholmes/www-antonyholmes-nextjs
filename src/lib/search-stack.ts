import Stack from "./stack"
import StringBuffer from "./string-buffer"

function getSearchStack(q: string): any[] {
  const text = q
    .replace(/ /g, " OR ")
    .replace(/( OR)+/g, " OR")
    .replace(/AND OR/g, "AND")
    .replace(/OR AND/g, "AND")

  const buffer = new StringBuffer()
  let quoteMode = false
  let fieldMode = false

  const opStack = new Stack()
  const outputStack = new Stack()
  let token: string
  let op: any

  for (let c of q) {
    switch (c) {
      case '"':
        quoteMode = !quoteMode

        if (!quoteMode) {
          // we left a quote so create a token
          outputStack.push({ op: "search", text: buffer.toString(), field: "" })
          buffer.clear()
        }
        break
      case "[":
        if (!quoteMode) {
          if (buffer.getLength() > 0) {
            outputStack.push({
              op: "search",
              text: buffer.toString(),
              field: "",
            })
            buffer.clear()
          }
          fieldMode = true
        } else {
          buffer.append(c)
        }

        break
      case "]":
        if (!quoteMode) {
          if (buffer.getLength() > 0) {
            outputStack.peek().field = buffer.toString()
            buffer.clear()
          }

          fieldMode = false
        } else {
          buffer.append(c)
        }
        break
      default:
        if (quoteMode || fieldMode) {
          buffer.append(c)
        } else {
          switch (c) {
            case "(":
              opStack.push({ op: "(", text: "", field: "" })
              break
            case ")":
              if (buffer.getLength() > 0) {
                outputStack.push({
                  op: "search",
                  text: buffer.toString(),
                  field: "",
                })
                buffer.clear()
              }
              while (!opStack.isEmpty()) {
                op = opStack.pop()
                if (op.op === "(") {
                  break
                } else {
                  outputStack.push(op)
                }
              }
              break
            case " ":
              if (buffer.getLength() > 0) {
                outputStack.push({
                  op: "search",
                  text: buffer.toString(),
                  field: "",
                })
                buffer.clear()
              }
              break
            default:
              buffer.append(c)
              token = buffer.toString()

              switch (token) {
                case "AND":
                  while (!opStack.isEmpty()) {
                    if (opStack.peek().op === "AND") {
                      outputStack.push(opStack.pop())
                    } else {
                      break
                    }
                  }

                  opStack.push({ op: token, text: "", field: "" })
                  buffer.clear()
                  break
                case "OR":
                  while (!opStack.isEmpty()) {
                    outputStack.push(opStack.pop())
                  }

                  opStack.push({ op: token, text: "", field: "" })
                  buffer.clear()
                  break
                default:
                  break
              }
          }
        }

        break
    }
  }

  // If something left in buffer, add as search string
  if (buffer.getLength() > 0) {
    outputStack.push({ op: "search", text: buffer.toString(), field: "" })
  }

  while (!opStack.isEmpty()) {
    outputStack.push(opStack.pop())
  }

  const ret = outputStack.values()

  return ret
}

export default getSearchStack
