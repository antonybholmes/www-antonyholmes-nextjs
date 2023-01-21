import "../styles/main.scss"

import IChildrenProps from "../interfaces/children-props"

export default function RootLayout({ children }: IChildrenProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
