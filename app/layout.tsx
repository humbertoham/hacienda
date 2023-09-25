import { Footer, Navbar } from '@/components'
import './globals.css'


export const metadata = {
  title: 'Hacienda Del Fraile',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar />
      <body className="relative">{children}</body>
      <Footer/>
   
    </html>
  )
}
