import { toWords } from "~/lib/utils"
import WordList from "./word-list"

export default function WordWrapper({ data }: { data: string[] }) {
  const words = toWords(data)
  return <WordList words={words} />
}
