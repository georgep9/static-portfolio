import type { NextPage } from 'next'
import PortfolioContent from '../common/components/portfolio-page/PortfolioContent'
import Layout from '../common/components/layout/Layout'

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
