import getSearchStack from "./search-stack"
import Stack from "./stack"

function getBooleanSearch(
  query: string,
  items: any,
  search = (token: any, items: any): any => {
    return []
  },
  andTest = (s1: any, s2: any): any => {
    return []
  },
  orTest = (s1: any, s2: any): any => {
    return []
  }
) {
  if (query === "") {
    return items
  }

  let terms: string[] = []
  let s1: any
  let s2: any
  let titles: Set<any>

  // const f1: number = query.indexOf("[")

  // if (f1 !== -1) {
  //   const f2: number = query.indexOf("]")
  //   field = query.substring(f1 + 1, f2)
  //   query = query.substring(0, f1)
  // }

  const searchStack = getSearchStack(query)

  let opStack: Stack = new Stack()

  for (let token of searchStack) {
    switch (token.op) {
      case "AND":
        s2 = opStack.pop()
        s1 = opStack.pop()

        if (s1 !== null && s2 !== null) {
          opStack.push(andTest(s1, s2))
        } else {
          opStack.push(s2)
        }

        break
      case "OR":
        s2 = opStack.pop()
        s1 = opStack.pop()

        if (s1 !== null && s2 !== null) {
          opStack.push(orTest(s1, s2))
        } else {
          opStack.push(s2)
        }

        break
      default:
        // Search for token
        opStack.push(token !== "" ? search(token, items) : [])
        break
    }
  }

  // Search results are top of the stack
  return opStack.pop()
}

export default getBooleanSearch
