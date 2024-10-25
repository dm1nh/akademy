import PostList from "~/components/post-list"
import { getSortedAssignments } from "~/lib/data"

export default function AssignmentsPage() {
  const assignments = getSortedAssignments()

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between border-b border-border pb-2">
        <h2 className="text-3xl font-bold">Assignments</h2>
        <div>{assignments.length} assignments</div>
      </div>
      <PostList type="assignment" posts={assignments} />
    </div>
  )
}
