import IClassProps from "../interfaces/class-props"

interface IProps extends IClassProps {}

export default function QuoteStart({ className }: IProps) {
  return (
    <svg
      version="1.1"
      viewBox="0 0 872 603.1"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g transform="translate(-10,-198.5)">
        <path d="m357.9 198.5 11.6 7.7c-60 36.9-93.9 91.7-101.6 164.6 114.4 33.9 171.6 102.3 171.6 205.2 0 63.4-21 116.9-63 160.4s-93.5 65.2-154.3 65.2c-61.7 0-112.5-21.9-152.4-65.6s-59.8-99.6-59.8-167.8c0-85.7 33.1-164.6 99.4-236.7 66.1-71.9 149-116.2 248.5-133z" />
        <path d="m800.4 198.5 11.6 7.7c-60 36.9-93.9 91.7-101.6 164.6 114.4 33.9 171.6 102.3 171.6 205.2 0 63.4-21 116.9-63 160.4s-93.5 65.2-154.3 65.2c-61.7 0-112.5-21.9-152.4-65.6s-59.8-99.6-59.8-167.8c0-85.7 33.1-164.6 99.4-236.7 66.1-71.9 149-116.2 248.5-133z" />
      </g>
    </svg>
  )
}
