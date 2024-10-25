import "~/styles/globals.css"

import { type Metadata } from "next"
import { Inter as FontSans } from "next/font/google"

import Header from "~/components/header"

export const metadata: Metadata = {
  title: "Akademy",
  description: "English class assignments and study sets",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

const fontSans = FontSans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fontSans.className}`}>
      <body className="text-base">
        <Header />
        <main className="py-16">
          <div className="container">{children}</div>
        </main>
      </body>
    </html>
  )
}
