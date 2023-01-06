import IStock from "./stock"

export default interface IBrokerage {
  name: string
  stocks: IStock[]
}
