interface IProps {
  cond: boolean
  c1?: any
  c2?: any
}

export default function CondComp({ cond = true, c1, c2 = <></> }: IProps) {
  return cond ? c1 : c2
}
