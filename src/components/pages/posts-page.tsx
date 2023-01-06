import IFieldMap from "../../interfaces/field-map"
import IPreviewPost from "../../interfaces/preview-post"
import BaseCol from "../base-col"
import PagePagination from "../page-pagination"
import HeadPosts from "../post/head-posts"
import HeroPosts from "../post/hero-posts"
import LatestPosts from "../post/latest-posts"
import RestPosts from "../post/rest-posts"
import SectionPosts from "../post/section-posts"
import SectionPostsVert from "../post/section-posts-vert"

interface IProps {
  posts: IPreviewPost[]
  page: number
  pages: number
  sectionMap?: IFieldMap
}

const PostsPage = ({ posts, page = 0, pages = 1, sectionMap }: IProps) => {
  const heroPosts = posts.slice(0, 4)
  const headPosts = posts.slice(4, 6)
  const restPosts = posts.slice(6)

  return (
    <BaseCol className="mb-32 gap-y-16">
      <HeroPosts posts={heroPosts} />

      {/* <HeadPost post={heroPost} /> */}
      {headPosts.length > 0 && <HeadPosts posts={headPosts} />}
      {/* <HeroPost post={heroPost} /> */}
      {/* <MorePosts posts={morePosts} /> */}

      {pages > 1 && restPosts.length > 0 && <RestPosts posts={restPosts} />}

      {/* <Pagination page={page} pages={pages} /> */}
      {pages > 1 && <PagePagination page={page} pages={pages} />}

      {pages === 0 && restPosts.length && <LatestPosts posts={restPosts} />}

      {sectionMap && (
        <>
          <SectionPostsVert
            section="Guides & Tutorials"
            posts={sectionMap["Guides & Tutorials"]}
          />
          <SectionPosts section="Opinions" posts={sectionMap["Opinions"]} />

          <SectionPostsVert
            section="Retirement"
            posts={sectionMap["Retirement"]}
          />

          {/* <SectionPosts section="Reviews" posts={sectionMap['Reviews']} /> */}

          <SectionPostsVert
            section="News & Announcements"
            posts={sectionMap["News & Announcements"]}
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
