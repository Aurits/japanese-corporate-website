import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "./components/header"
import Footer from "./components/footer"

export const metadata: Metadata = {
  title: "AEGIS LLP - 地方自治体のデジタル変革パートナー",
  description: "豊かな創造と確かな技術で地域社会に貢献する",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body style={{ fontFamily: '"Noto Sans JP", "Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif' }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
