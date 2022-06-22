import { useRef, useEffect, useState } from 'react'
import cn from '../lib/class-names'
import VCenterRow from './v-center-row'

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
  prefix = '',
  prefixLeft = true,
  alignLeft = true,
}: IProps) => {
  const [_focus, setFocus] = useState(false)
  const textRef = useRef(null)

  //const [_value, _setValue] = useState(value)

  useEffect(() => {
    if (textRef && textRef.current) {
      textRef.current.value = value
    }
  }, [textRef, value])

  const _handleInput = (e: any) => {
    //_setValue(e.target.value)

    if (e.key === 'Enter' && onChange !== null) {
      onChange(e.target.value)
    }
  }

  const _handleFocus = () => {
    setFocus(true)
  }

  const _handleBlur = () => {
    setFocus(false)
  }

  return (
    <div
      className={cn('rounded-lg overflow-hidden animate-button', [
        _focus,
        'bg-blue-200',
      ])}
      style={{ padding: '4px' }}
      onFocus={_handleFocus}
      onBlur={_handleBlur}
    >
      <VCenterRow className="w-full bg-white rounded-md border border-gray-300 hover:border-gray-400 animate-button p-2">
        {prefix !== '' && prefixLeft && <div className="mr-1">{prefix}</div>}
        <div className={`w-full`}>
          <input
            type="text"
            onKeyDown={_handleInput}
            onFocus={_handleFocus}
            onBlur={_handleBlur}
            className={cn('w-full outline-none', [!alignLeft, 'text-right'])}
            ref={textRef}
          />
        </div>
        {prefix !== '' && !prefixLeft && <div className="ml-1">{prefix}</div>}
      </VCenterRow>
    </div>
  )
}

export default TextBox
