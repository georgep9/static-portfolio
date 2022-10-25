`
All copyright interest in this file written by George Patterson, pertains to the LICENSE at root.
`

import type { NextPage } from 'next'
import AboutPage from '../common/components/about-page/AboutPage'
import Layout from '../common/components/layout/Layout'

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
