import IChildrenProps from "../interfaces/children-props"

interface IProps extends IChildrenProps {
  cond: boolean
  c2?: any
}

/**
 * A conditional component that only displays its children if a
 * condition is true otherwise a default (<></>). This is to
 * standardize conditional rendering and clean up the use of x ? y : z
 * inline statements.
 *
 * @param param0
 * @returns
 */
export default function CondComp({
  cond = true,
  c2 = <></>,
  children,
}: IProps) {
  return cond ? children : c2
}
