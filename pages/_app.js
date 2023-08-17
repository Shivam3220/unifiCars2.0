import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
// import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps }) {
  return (
    // <AnimatePresence>
      <div className=''>
        <Navbar />
        <Component {...pageProps} />
      </div>
    // </AnimatePresence>
  )
}
