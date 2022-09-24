import type { NextPage } from 'next'
import AboutPage from '../components/about-page/AboutPage'
import Layout from '../components/layout/Layout'

const About: NextPage = () => {
  return (
    <>
      <Layout>
        <AboutPage />
      </Layout>
    </>
  )
}

export default About
