import { notFound } from "next/navigation"

import Mdx from "~/components/mdx"
import { getAssignment, getSortedAssignments } from "~/lib/data"

export async function generateStaticParams() {
  return getSortedAssignments().map((assignment) => ({
    slug: assignment.slugAsParams,
  }))
}

export function generateMetadata({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const assignment = getAssignment(slug)

  if (!assignment) throw new Error(`Assignment not found: ${slug}`)

  return {
    title: assignment.title,
  }
}

export default function AssignmentPage({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const assignment = getAssignment(slug)

  if (!assignment) return notFound()

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-foreground/80">
        {assignment.title}
      </h1>
      <Mdx code={assignment.body.code} />
    </div>
  )
}
