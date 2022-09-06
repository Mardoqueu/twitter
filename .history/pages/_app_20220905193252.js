import '../styles/globals.css'
import {SessionProvide} from "next-auth/react"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
