import Link from "next/link"

import { type Frontmatter } from "~/lib/data"
import { formatDate } from "~/lib/utils"

export default function PostCard({
  type = "set",
  title,
  description,
  date,
  slugAsParams,
}: Frontmatter & { type: "set" | "assignment" }) {
  return (
    <Link href={`/${type}s/${slugAsParams}`}>
      <div className="space-y-2 rounded-xl border border-border p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="truncate text-foreground/75">{description}</p>
        <div className="text-sm text-foreground/50">{formatDate(date)}</div>
      </div>
    </Link>
  )
}
