import type { NextPage } from 'next'
import Layout from '../components/layout/Layout'
import AboutMe from '../components/index-page/AboutMe'

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <AboutMe />
      </Layout>
    </div>
  )
}

export default Home
