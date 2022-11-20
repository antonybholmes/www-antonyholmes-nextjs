interface IProps {
  text: string
}

export default function NoResults({ text = "No results." }: IProps) {
  return <p className="text-center">{text}</p>
}
