interface IProps {
  min?: number
  max?: number
  value?: number
  step?: number
  onChange?: any
  className?: string
}

const RangeSlider = ({
  min,
  max,
  step,
  value,
  onChange,
  className,
}: IProps) => {
  //const [_value, _setValue] = useState(value)

  const handleInput = (e: any) => {
    //_setValue(e.target.value)

    if (onChange !== null) {
      onChange(parseInt(e.target.value))
    }
  }

  return (
    <div className={`w-full ${className}`}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onInput={handleInput}
        className="slider"
      />
    </div>
  )
}

RangeSlider.defaultProps = {
  min: 1,
  max: 100,
  step: 1,
  value: 10,
  onChange: null,
  className: '',
}

export default RangeSlider
