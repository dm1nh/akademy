import Word, { type WordProps } from "./word"

export default function WordList({ words }: { words: WordProps[] }) {
  return (
    <ul className="mt-4 space-y-4">
      {words.map((word, index) => (
        <li key={word.term}>
          <Word isEven={index % 2 !== 0} {...word} />
        </li>
      ))}
    </ul>
  )
}
