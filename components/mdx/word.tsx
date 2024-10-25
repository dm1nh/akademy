"use client"

import useSound from "use-sound"

import { HearingIcon } from "~/components/icons"

export interface WordProps {
  term: string
  ipa: string
  audio: string
  cls: string
  definition: string
}

export default function Word({ term, ipa, audio, cls, definition }: WordProps) {
  const [play] = useSound(audio)

  return (
    <div className="flex items-center space-x-2 rounded bg-foreground/80 p-2 text-lg text-background">
      <strong>{term}</strong>
      <button
        className="flex items-center space-x-2 text-background/75 focus:text-blue-400 active:text-blue-200"
        onClick={() => play()}
      >
        <i>{ipa}</i>
        <HearingIcon className="h-4 w-4" />
      </button>
      <span className="font-medium text-background/25">{cls}.</span>{" "}
      <span>{definition}</span>
    </div>
  )
}
