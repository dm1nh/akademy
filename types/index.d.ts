export type SVGProps = React.SVGAttributes<SVGSVGElement>

export interface Answer {
  id: string
  text: string
  right?: boolean
}

export interface MultipleChoiceQuestion {
  id: string
  text: string
  answer: Answer[]
}

export interface ShortAnswerQuestion {
  id: string
  text: string
  answer: string
}

export interface EssayQuestion {
  id: string
  text: string
  answer: string
}

export interface Question {
  id: string
  type: "1" | "2" | "3" // 1 - multiple choice, 2 - short answer, 3 - essay
  text: string
  answer: string | Answer[]
}
