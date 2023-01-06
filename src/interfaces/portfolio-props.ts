import IClassProps from "./class-props"
import IPreviewPortfolio from "./preview-portfolio"

export default interface IPortfolioProps extends IClassProps {
  post: IPreviewPortfolio
}
