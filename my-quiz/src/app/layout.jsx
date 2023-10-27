import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quiz',
  description: 'Um quiz simples para treinar suas habilidades básicas!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} h-auto pb-24 w-screen bg-zinc-900 text-white flex items-center justify-center`}>
        {children}
      </body>
    </html>
  )
}
