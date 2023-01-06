import { useRef, useEffect, useState } from "react"
import cn from "../lib/class-names"

interface IProps {
  value?: any
  onChange?: any
  prefix?: string
  prefixLeft?: boolean
  alignLeft?: boolean
}

const TextBox = ({
  value = 10,
  onChange = null,
  prefix = "",
  prefixLeft = true,
  alignLeft = true,
}: IProps) => {
  const [_focus, setFocus] = useState(false)
  const textRef = useRef(null)

  //const [_value, _setValue] = useState(value)

  useEffect(() => {
    //@ts-ignore
    textRef.current.value = value
  }, [textRef, value])

  const _handleInput = (e: any) => {
    //_setValue(e.target.value)

    if (e.key === "Enter" && onChange !== null) {
      onChange(e.target.value)
    }
  }

  const handleFocus = () => {
    setFocus(true)
  }

  const handleBlur = () => {
    setFocus(false)
  }

  return (
    <div
      className="animate-button flex h-12 flex-row items-center rounded-md border border-slate-300 bg-white px-2 hover:border-slate-400"
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {prefix !== "" && prefixLeft && <div className="mr-1">{prefix}</div>}
      <div className={`w-full`}>
        <input
          type="text"
          onKeyDown={_handleInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={cn("w-full outline-none", [!alignLeft, "text-right"])}
          ref={textRef}
        />
      </div>
      {prefix !== "" && !prefixLeft && <div className="ml-1">{prefix}</div>}
    </div>
  )
}

export default TextBox
