import { type Frontmatter } from "~/lib/data"
import PostCard from "./post-card"

export default function PostList({
  type = "set",
  posts,
}: {
  type: "set" | "assignment"
  posts: Frontmatter[]
}) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {posts.map((post) => (
        <PostCard key={post.slug} type={type} {...post} />
      ))}
    </div>
  )
}
