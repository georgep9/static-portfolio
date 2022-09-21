import type { NextPage } from 'next'
import PortfolioContent from '../components/portfolio-page/PortfolioContent'
import Layout from '../components/layout/Layout'

const Porfolio: NextPage = () => {
  return (
    <>
      <Layout>
        <PortfolioContent />
      </Layout>
    </>
  )
}

export default Porfolio
