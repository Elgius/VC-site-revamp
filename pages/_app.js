import NavBar from '@/components/navbar'
import '../styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
    <>
    <NavBar />
    <Component {...pageProps} />
    </>
  )
}