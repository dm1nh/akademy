import { notFound } from "next/navigation"

import Mdx from "~/components/mdx"
import { getSet, getSortedSets } from "~/lib/data"

export async function generateStaticParams() {
  return getSortedSets().map((set) => ({
    slug: set.slug,
  }))
}

export function generateMetadata({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const set = getSet(slug)

  if (!set) throw new Error(`Set not found: ${slug}`)

  return {
    title: set.title,
  }
}

export default function SetPage({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const set = getSet(slug)

  if (!set) return notFound()

  return (
    <div>
      <h1>{set.title}</h1>
      <Mdx code={set.body.code} />
    </div>
  )
}
