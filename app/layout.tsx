import { Footer, Navbar } from '@/components'
import Provider from '@/components/Provider'
import '@/styles/globals.css'




export const metadata = {
  title: 'Car Hub',
  description: 'Discover the best cars in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
      <Provider>
        <Navbar/>
        {children}
        <Footer />
        </Provider>
      </body>
    </html>
  )
}
