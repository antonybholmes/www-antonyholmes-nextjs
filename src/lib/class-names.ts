export const ctl = (classNames: string) => {
  return classNames.replace(/\s+/gm, ' ').trim()
}

type CSSClass = string | [boolean, string] | [boolean, string, string]

export const cn = (...args: CSSClass[]) => {
  return args
    .map(arg => {
      if (arg === undefined || arg === null) {
        return ''
      }

      if (Array.isArray(arg)) {
        switch (arg.length) {
          case 2:
            return arg[0] ? arg[1] : ''
          case 3:
            return arg[0] ? arg[1] : arg[2]
          default:
            return ''
        }
      } else {
        return arg
      }
    })
    .filter(arg => arg !== '')
    .map(s => ctl(s))
    .join(' ')
}

export default cn
