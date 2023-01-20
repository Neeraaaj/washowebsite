import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../component/services.css'
import Head from 'next/head';
import '../component/animationtext'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />   
  );
}


