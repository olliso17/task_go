

import { MyProvider } from '@/context/cookieContext'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (<QueryClientProvider client={queryClient}>
    <ChakraProvider>
      <MyProvider><Component {...pageProps} /></MyProvider>
    </ChakraProvider>

  </QueryClientProvider>)
}
