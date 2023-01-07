import IFieldMap from "../../interfaces/field-map"
import IPreviewPost from "../../interfaces/preview-post"
import BaseCol from "../base-col"
import Pagination from "../pagination"
import HeadPosts from "./head-posts"
import HeroPosts from "./hero-posts"
import LatestPosts from "./latest-posts"
import RestPosts from "./rest-posts"
import SectionPosts from "./section-posts"
import SectionPostsVert from "./section-posts-vert"

interface IProps {
  posts: IPreviewPost[]
  page: number
  pages: number
  showLatestPosts?: boolean
  sectionMap?: IFieldMap
  root?: string
}

const PostsPage = ({
  posts,
  page,
  pages,
  showLatestPosts = false,
  sectionMap,
  root = "/blog",
}: IProps) => {
  const heroPosts = posts.slice(0, 4)
  const headPosts = posts.slice(4, 6)
  const restPosts = posts.slice(6)

  return (
    <BaseCol className="mt-8 gap-y-16">
      <HeroPosts posts={heroPosts} />

      {/* <HeadPost post={heroPost} /> */}
      {headPosts.length > 0 && <HeadPosts posts={headPosts} />}
      {/* <HeroPost post={heroPost} /> */}
      {/* <MorePosts posts={morePosts} /> */}

      {restPosts.length > 0 && <RestPosts posts={restPosts} />}

      {/* <Pagination page={page} pages={pages} /> */}
      {pages > 1 && <Pagination page={page} pages={pages} root={root} />}

      {showLatestPosts && <LatestPosts posts={posts} />}

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
