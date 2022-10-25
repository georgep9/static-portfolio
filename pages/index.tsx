`
All copyright interest in this file written by George Patterson, pertains to the LICENSE at root.
`

import type { NextPage } from 'next'
import Index from '../common/components/index-page/Index'
import Layout from '../common/components/layout/Layout'

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Index />
      </Layout>
    </>
  )
}

export default Home
