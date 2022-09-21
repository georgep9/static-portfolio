import type { NextPage } from 'next'
import AboutMe from '../components/index-page/AboutMe'
import Layout from '../components/layout/Layout'
import NavBar from '../components/layout/NavBar'

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <AboutMe />
      </Layout>
    </>
  )
}

export default Home
