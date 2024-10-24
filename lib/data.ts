import {
  allAssignments,
  allSets,
  type Assignment,
  type Set,
} from "contentlayer/generated"
import { compareDesc } from "date-fns"

export interface Frontmatter {
  title: string
  description: string
  date: string
  slug: string
  slugAsParams: string
}

function sorted<T extends { date: string }>(a: T, b: T) {
  return compareDesc(new Date(a.date), new Date(b.date))
}

function getFrontmatter({
  title,
  description,
  date,
  slug,
  slugAsParams,
}: Set | Assignment): Frontmatter {
  return { title, description, date, slug, slugAsParams }
}

export function getSortedSets(): Frontmatter[] {
  return allSets
    .filter((set) => set.published)
    .sort(sorted)
    .map(getFrontmatter)
}

export function getSortedAssignments(): Frontmatter[] {
  return allAssignments
    .filter((assignment) => assignment.published)
    .sort(sorted)
    .map(getFrontmatter)
}

export function getSet(slug: string): Set | undefined {
  return allSets.find((set) => set.published && set.slugAsParams === slug)
}

export function getAssignment(slug: string): Assignment | undefined {
  return allAssignments.find(
    (assignment) => assignment.published && assignment.slugAsParams === slug
  )
}
