import IAuthorPost from "../../interfaces/author-post"
import IFieldMap from "../../interfaces/field-map"
import BaseCol from "../base-col"
import HCenterRow from "../h-center-row"
import PagePagination from "../page-pagination"
import CategoryPosts from "../post/category-posts"
import CategoryPostsVert from "../post/category-posts-vert"
import HeadPosts from "../post/head-posts"
import HeroPosts from "../post/hero-posts"
import LatestPosts from "../post/latest-posts"
import RestPosts from "../post/rest-posts"

interface IProps {
  posts: IAuthorPost[]
  page: number
  pages: number
  showLatest?: boolean
  categoryMap?: IFieldMap
}

const PostsPage = ({
  posts,
  page = 0,
  pages = 1,
  showLatest = false,
  categoryMap,
}: IProps) => {
  const heroPosts = posts.slice(0, 4)
  const headPosts = posts.slice(4, 6)
  const latestPosts = showLatest ? posts.slice(6, 10) : []
  const restPosts = showLatest ? posts.slice(10) : posts.slice(6)

  return (
    <BaseCol className="mb-32 gap-y-16">
      <HeroPosts posts={heroPosts} />

      {/* <HeadPost post={heroPost} /> */}
      {headPosts.length > 0 && <HeadPosts posts={headPosts} />}
      {/* <HeroPost post={heroPost} /> */}
      {/* <MorePosts posts={morePosts} /> */}

      {latestPosts.length > 0 && <LatestPosts posts={latestPosts} />}
      {restPosts.length > 0 && <RestPosts posts={restPosts} />}

      {/* <Pagination page={page} pages={pages} /> */}
      {pages > 1 && (
        <HCenterRow className="mt-16">
          <PagePagination page={page} pages={pages} />
        </HCenterRow>
      )}

      {categoryMap && (
        <>
          <CategoryPostsVert
            category="Guides & Tutorials"
            posts={categoryMap["Guides & Tutorials"]}
          />
          <CategoryPosts category="Opinions" posts={categoryMap["Opinions"]} />

          <CategoryPostsVert
            category="Retirement"
            posts={categoryMap["Retirement"]}
          />

          {/* <SectionPosts section="Reviews" posts={sectionMap['Reviews']} /> */}

          <CategoryPostsVert
            category="News & Announcements"
            posts={categoryMap["News & Announcements"]}
          />
        </>
      )}
    </BaseCol>
  )
}

// "Guides & Tutorials",
//   "Opinions",
//   "Retirement",
//   "News & Announcements",
//ightMode={index % 2 === 0}
//key={index}

export default PostsPage
