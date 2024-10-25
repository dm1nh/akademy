import Word, { type WordProps } from "./word"

export default function WordList({ words }: { words: WordProps[] }) {
  return (
    <ul className="mt-4 flex flex-col space-y-1">
      {words.map((word) => (
        <li key={word.term}>
          <Word {...word} />
        </li>
      ))}
    </ul>
  )
}
