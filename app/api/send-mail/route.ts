import { NextResponse } from "next/server"
import { z } from "zod"

import mailer from "~/lib/mailer"

const SendMailSchema = z.object({
  to: z.string(),
  subject: z.string(),
  html: z.string(),
})

export async function POST(req: Request) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data = (await req.json()) as z.infer<typeof SendMailSchema>
  SendMailSchema.parse(data)
  console.log(data)
  await mailer.send({
    to: data.to,
    subject: data.subject,
    html: data.html,
  })
  return NextResponse.json({ success: true })
}
