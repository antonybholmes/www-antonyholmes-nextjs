import { SITE_NAME } from "../constants"

const getCopyright = () => {
  return `\u00a9 ${new Date().getFullYear()} ${SITE_NAME}`
}

export default getCopyright
