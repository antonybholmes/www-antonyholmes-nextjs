import useWindowListener from "./use-window-listener"

export default function useMouseUpListener(handler: any) {
  useWindowListener("mouseup", handler)
}
