import { parseISO, format } from 'date-fns'

interface IProps {
  date: string
}

const DateFormatter = ({ date }: IProps) => {
  const d = parseISO(date)
  return <time dateTime={date}>{format(d, 'LLL	d, yyyy')}</time>
}

export default DateFormatter
