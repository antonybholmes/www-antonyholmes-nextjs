import CheckIcon from "../../icons/check"
import CloseIcon from "../../icons/close"
import IPost from "../../interfaces/post"
import BaseCol from "../base-col"
import ExpandTab from "../expand-tab"
import HCenterRow from "../h-center-row"
import StarRating from "./star-rating"
import VCenterRow from "../v-center-row"

interface IProps {
  post: IPost
}

export default function ProsAndCons({ post }: IProps) {
  return (
    <BaseCol className="gap-y-4">
      <VCenterRow>
        <StarRating rating={post.frontmatter.rating} />
      </VCenterRow>

      <div>
        <ExpandTab title="Pros & Cons" isExpanded={true}>
          <div className="my-2 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <ul className="flex flex-col gap-y-2 rounded-lg border border-slate-200 p-4 text-sm">
              {post.frontmatter.pros.map((pro: string, index: number) => {
                return (
                  <li
                    className="flex flex-row items-center gap-x-2"
                    key={index}
                  >
                    <HCenterRow className="h-4 w-4 shrink-0 items-center rounded-full bg-emerald-400 stroke-white">
                      <CheckIcon className="w-4 stroke-2" />
                    </HCenterRow>

                    <div>{pro}</div>
                  </li>
                )
              })}
            </ul>

            <ul className="flex flex-col gap-y-2 rounded-lg border border-slate-200 p-4 text-sm">
              {post.frontmatter.cons.map((con: string, index: number) => {
                return (
                  <li
                    className="flex flex-row items-center gap-x-2"
                    key={index}
                  >
                    <HCenterRow className="h-4 w-4 shrink-0 items-center rounded-full bg-rose-400 stroke-white">
                      <CloseIcon className="w-3 stroke-2" />
                    </HCenterRow>

                    <div>{con}</div>
                  </li>
                )
              })}
            </ul>
          </div>
        </ExpandTab>

        <ExpandTab title="Details" isExpanded={true}>
          <ul className="my-2 flex list-inside list-disc flex-col gap-y-1 text-sm">
            {post.frontmatter.details.map((detail: string, index: number) => {
              return <li key={index}>{detail}</li>
            })}
          </ul>
        </ExpandTab>
      </div>
    </BaseCol>
  )
}
