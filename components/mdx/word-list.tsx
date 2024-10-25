import WordCard, { type Word } from "./word-card"

export default function WordList({ words }: { words: Word[] }) {
  return (
    <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {words.map((word) => (
        <li key={word.term}>
          <WordCard {...word} />
        </li>
      ))}
    </ul>
  )
}
