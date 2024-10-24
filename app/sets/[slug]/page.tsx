export default function SetPage({
  params: { slug },
}: {
  params: { slug: string }
}) {
  return <div>{slug}</div>
}
