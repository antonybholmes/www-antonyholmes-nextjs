import IAuthor from "../../interfaces/author"
import IAuthorPost from "../../interfaces/author-post"
import BaseRow from "../base-row"
import HCenterRow from "../h-center-row"
import PageTitle from "../page-title"
import AvatarImageLarge from "../person/avatar-image-large"
import PostBody from "../post/post-body"
import PostsPage from "./posts-page"

interface IProps {
  author: IAuthor
  posts: IAuthorPost[]
  page: number
  pages: number
}

export default function AuthorPage({ author, posts, page, pages }: IProps) {
  return (
    <>
      <BaseRow className="gap-x-8">
        <div className="w-full">
          <HCenterRow className="mb-8 lg:hidden">
            <div>
              <AvatarImageLarge author={author} className="w-56" />
            </div>
          </HCenterRow>
          <PageTitle
            title={author.frontmatter.name}
            superTitle="Posts by"
            subTitle={author.frontmatter.title}
            className="text-center lg:text-left"
          />
          <PostBody html={author.html} className="mt-8" />
        </div>
        <div className="hidden lg:block ">
          <AvatarImageLarge author={author} className="w-64" />
        </div>
      </BaseRow>

      <section className="mt-16 border-t border-gray-200 pt-16">
        <PostsPage posts={posts} page={page} pages={pages} />
      </section>
    </>
  )
}
