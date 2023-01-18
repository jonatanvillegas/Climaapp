import { ClimaProvider } from '@/context/ClimaProvider'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ClimaProvider>
      <Component {...pageProps} />

    </ClimaProvider>
  )
  
}
