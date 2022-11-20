import { SITE_NAME } from "../constants"

function getCopyright() {
  return `\u00a9 ${new Date().getFullYear()} ${SITE_NAME}`
}

export default getCopyright
