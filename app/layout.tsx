import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dynamic Solutions | Creative Digital Agency',
  description: 'Dynamic Solutions is a full-service digital agency specializing in web development, design, and digital marketing solutions for modern businesses.',
  generator: 'Dynamic Solutions Agency',
  keywords: 'digital agency, web development, design, marketing, business solutions, creative agency',
  authors: [{ name: 'Dynamic Solutions Team' }],
  openGraph: {
    title: 'Dynamic Solutions | Creative Digital Agency',
    description: 'Transform your digital presence with our innovative solutions',
    type: 'website',
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>{children}</body>
    </html>
  )
}