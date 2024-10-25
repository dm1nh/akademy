"use client"

import useSound from "use-sound"

export interface Word {
  term: string
  ipa: string
  cls: string
  definition: string
  audio: string
}

export default function WordCard({ term, ipa, cls, definition, audio }: Word) {
  const [play] = useSound(audio, { playbackRate: 0.75 })

  return (
    <div className={`space-y-1 rounded-xl border border-border p-4 text-lg`}>
      <span>
        <strong>{term}</strong>{" "}
        <button
          className="inline-flex items-center space-x-2 text-foreground/60 focus:text-blue-600 active:text-blue-400"
          onClick={() => play()}
          data-audio={audio}
        >
          <i>{ipa}</i>
        </button>
      </span>
      <div>
        <span className="font-medium text-foreground/40">{cls}.</span>{" "}
        <span>{definition}</span>
      </div>
    </div>
  )
}
