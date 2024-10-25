import PostList from "~/components/post-list"
import { getSortedSets } from "~/lib/data"

export default function SetsPage() {
  const sets = getSortedSets()

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between border-b border-border pb-2">
        <h2 className="text-3xl font-bold">Sets</h2>
        <div>{sets.length} sets</div>
      </div>
      <PostList type="set" posts={sets} />
    </div>
  )
}
