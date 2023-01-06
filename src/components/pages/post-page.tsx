import IPost from "../../interfaces/post"
import IPreviewPost from "../../interfaces/preview-post"

import BaseCol from "../base-col"
import ContentDiv from "../content-div"
import MorePosts from "../post/more-posts"
import PostBody from "../post/post-body"
import PostDetailsHoz from "../post/post-details-hoz"
import PostHeader from "../post/post-header"
import PostLayout from "../post/post-layout"
import PostSocialMedia from "../post/post-social-media"
import PostSocialMediaVert from "../post/post-social-media-vert"
import PostTags from "../post/post-tags"
import RelatedPosts from "../post/related-posts"

interface IProps {
  post: IPost
  morePosts?: IPreviewPost[]
  readMorePosts?: IPreviewPost[]
}

export default function PostPage({
  post,
  morePosts = [],
  readMorePosts = [],
}: IProps) {
  return (
    <>
      <article>
        <PostHeader post={post} />

        <ContentDiv className="my-40">
          <></>
          <BaseCol className="gap-y-4 lg:gap-y-8">
            <PostDetailsHoz post={post} />

            <PostSocialMedia post={post} className="lg:hidden" />

            <PostLayout>
              <PostSocialMediaVert post={post} />

              <BaseCol tag="section" className="gap-y-8">
                <PostBody html={post.html} className="text-justify" />
                <PostTags post={post} />
              </BaseCol>

              <div>
                {morePosts.length > 0 && (
                  <MorePosts
                    posts={morePosts}
                    title={`More on ${post.frontmatter.tags[0]}`}
                  />
                )}
              </div>
            </PostLayout>
          </BaseCol>
          <></>
        </ContentDiv>
      </article>

      {readMorePosts.length > 0 && (
        <ContentDiv className="py-16">
          <></>
          <RelatedPosts posts={readMorePosts} title="Keep Reading" />
          <></>
        </ContentDiv>
      )}
    </>
  )

  // "Guides & Tutorials",
  //   "Opinions",
  //   "Retirement",
  //   "News & Announcements",
  //ightMode={index % 2 === 0}
  //key={index}
}
