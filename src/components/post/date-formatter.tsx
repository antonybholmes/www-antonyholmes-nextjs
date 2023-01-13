import { parseISO, format } from "date-fns"
import cn from "../../lib/class-names"

interface IProps {
  date: string
  className?: string
}

const DateFormatter = ({ date, className }: IProps) => {
  const d = parseISO(date)
  return (
    <>
      <time
        dateTime={date}
        className={cn("text-sm text-slate-500 md:hidden", className)}
      >
        {/* {format(d, 'eee LLL d, yyyy')} */}
        {format(d, "LLL d, yyyy")}
      </time>
      <time
        dateTime={date}
        className={cn("hidden text-sm text-slate-500 md:inline", className)}
      >
        {/* {format(d, 'eee LLL d, yyyy')} */}
        {format(d, "LLLL d, yyyy")}
      </time>
    </>
  )
}

export default DateFormatter
