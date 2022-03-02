import Head from 'next/head'
import styles from '../styles/Layout.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Hello World! </title>
        <meta name="keywords" content="web developer, fullstack, MERN" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1> welcome friend </h1>

    </div>
  )
}
// for data fetching
// getStaticprops: fetch at build, fast
// getServersideprops, fetch on every request, not as fast
// getStaticpaths: dynamically gen paths based on data fetched

// export const getStaticProps = async () => {
//   const { res, err } = await fetch('')
//   const { data } = await res.json()
//   return {
//   props: {
//     data
// (( this would allow us to then pass data to Home component as props or { data }))
//   }
//  }
// }