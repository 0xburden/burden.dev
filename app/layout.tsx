import './globals.css'

import type { Metadata } from 'next'
import { Inconsolata } from 'next/font/google'
import { Box } from '@chakra-ui/react'
import { Providers } from './providers'
import { Header, Footer } from '@/modules/layout/components'

const globalFont = Inconsolata({
  subsets: ['latin'],
  variable: '--font-inconsolata',
})

export const metadata: Metadata = {
  title: '0xburden - Anime character and developer',
  description: 'Self-explanatory',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={globalFont.className}
        style={{ backgroundColor: 'rgb(0 0 0 / 0)' }}
      >
        <Providers>
          <Box bg="blackAlpha.600" color="gray.50" h="100%" minH="100vh">
            <Header />
            <Box w="100%" m="auto" maxW="72rem" p={4}>
              {children}
            </Box>
            <Footer />
          </Box>
        </Providers>
      </body>
    </html>
  )
}
