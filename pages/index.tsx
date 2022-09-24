import type { NextPage } from 'next'
import Index from '../components/index-page/Index'
import Layout from '../components/layout/Layout'

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
