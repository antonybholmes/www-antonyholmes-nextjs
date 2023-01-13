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
        className={cn("md:hidden text-sm text-slate-500", className)}
      >
        {/* {format(d, 'eee LLL d, yyyy')} */}
        {format(d, "LLL d, yyyy")}
      </time>
      <time
        dateTime={date}
        className={cn("hidden md:inline text-sm text-slate-500", className)}
      >
        {/* {format(d, 'eee LLL d, yyyy')} */}
        {format(d, "LLLL d, yyyy")}
      </time>
    </>
  )
}

export default DateFormatter
