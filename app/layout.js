import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Recipe App',
  description: 'Discover new recipes and cook delicious meals!',
  image: '/og-image.png',
  type: 'website',
  keywords: ['recipes', 'food', 'cooking'],

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
