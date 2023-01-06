import useWindowListener from "./use-window-listener"

export default function useScrollListener(handler: any) {
  useWindowListener("scroll", handler)
}
