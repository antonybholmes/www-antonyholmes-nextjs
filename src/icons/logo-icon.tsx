import HCenterRow from "../components/h-center-row"
import VCenterRow from "../components/v-center-row"
import IClassProps from "../interfaces/class-props"
import cn from "../lib/class-names"

interface IProps extends IClassProps {
  headerMode?: string
}

export default function LogoIcon({ headerMode = "light", className }: IProps) {
  return (
    <VCenterRow className={cn("group gap-x-1 text-lg font-bold", className)}>
      {/* <BaseImage
      src="/assets/images/people/antony-holmes.webp"
      alt="Logo"
      size={[160,160]}
      className="rounded-full w-8"
    /> */}
      <HCenterRow
        className={cn(
          "transition-ani transition-color h-9 w-9 items-center bg-gradient-to-br",
          [
            headerMode === "light",
            "  bg-sky-600 text-white group-hover:bg-sky-500",
            "bg-slate-300 group-hover:bg-slate-200",
          ]
        )}
      >
        ah
      </HCenterRow>
      <span
        className={cn("transition-ani transition-color", [
          headerMode === "light",
          "text-sky-600 group-hover:text-sky-500",
          "text-slate-200",
        ])}
      >
        .
      </span>
      <span
        className={cn("transition-ani transition-color", [
          headerMode === "light",
          "text-sky-600 group-hover:text-sky-500",
          "text-slate-200",
        ])}
      >
        dev
      </span>
    </VCenterRow>

    // <svg width="150px" height="25px" viewBox="0 0 150 25" className={cn("w-64", className)}>
    //   <defs>
    //     <linearGradient id="rainbow" y1="0" y2="0">
    //       <stop stop-color="#1D4ED8" offset="5%" />
    //       <stop stop-color="#2DD4BF" offset="95%" />
    //     </linearGradient>
    //   </defs>
    //   <text>
    //     <tspan
    //       x="0"
    //       y="50%"
    //       className="font-bold border"
    //       fill={cn([headerMode==='light', "url(#rainbow)", "white"])}
    //       dominant-baseline="middle"

    //     >
    //       {SITE_DOMAIN}
    //     </tspan>
    //   </text>
    // </svg>
  )
}
