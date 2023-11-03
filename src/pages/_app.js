import React from 'react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {NavBar} from "../components/AppBar/AppBar";

import './globals.css'

export default function MyApp({Component, pageProps}) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <NavBar/>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
