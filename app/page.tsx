import Link from "next/link"

import PostList from "~/components/post-list"
import { Button } from "~/components/ui/button"
import { getSortedAssignments, getSortedSets } from "~/lib/data"

export default async function HomePage() {
  const sets = getSortedSets().slice(0, 4)
  const assignments = getSortedAssignments().slice(0, 4)

  return (
    <div className="space-y-16">
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-border pb-2">
          <h2 className="text-3xl font-bold">Sets</h2>
          <Link href="/sets">
            <Button size="sm">View All</Button>
          </Link>
        </div>
        <PostList type="set" posts={sets} />
      </section>
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-border pb-2">
          <h2 className="text-3xl font-bold">Assignments</h2>
          <Link href="/assignments">
            <Button size="sm">View All</Button>
          </Link>
        </div>
        <PostList type="assignment" posts={assignments} />
      </section>
    </div>
  )
}
