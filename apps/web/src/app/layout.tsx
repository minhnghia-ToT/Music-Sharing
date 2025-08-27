import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Spotify Clone - Nghe nhạc miễn phí',
  description: 'Spotify Clone được xây dựng bằng Next.js và TypeScript',
  keywords: 'spotify, music, streaming, vietnamese music, nghệ sĩ việt nam',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#121212" />
      </head>
      <body className="bg-spotify-black text-spotify-white">
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}