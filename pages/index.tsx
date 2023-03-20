import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ragib Ajmal</title>
        <meta name="description" content="Ragib Ajmal Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/R_icon.png" />
      </Head>
      <main className={styles.main}>

      </main>
    </>
  )
}
