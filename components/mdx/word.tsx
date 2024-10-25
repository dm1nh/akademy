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

export default function Word({
  isEven = false,
  term,
  ipa,
  audio,
  cls,
  definition,
}: WordProps & { isEven: boolean }) {
  const [play] = useSound(audio, { playbackRate: 0.8 })

  return (
    <div
      className={`rounded border-2 border-border p-4 text-lg ${isEven ? "bg-foreground/5" : "bg-background"} space-y-1`}
    >
      <span>
        <strong>{term}</strong>{" "}
        <button
          className="inline-flex items-center space-x-2 text-foreground/60 focus:text-blue-600 active:text-blue-400"
          onClick={() => play()}
        >
          <i>{ipa}</i>
          <HearingIcon className="h-4 w-4" />
        </button>
      </span>
      <div>
        <span className="font-medium text-foreground/40">{cls}.</span>{" "}
        <span>{definition}</span>
      </div>
    </div>
  )
}
