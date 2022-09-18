import type { NextPage } from 'next'
import PortfolioContent from '../components/portfolio-page/PortfolioContent'
import Layout from '../components/layout/Layout'

const Porfolio: NextPage = () => {
  return (
    <div>
      <Layout>
        <PortfolioContent />
      </Layout>
    </div>
  )
}

export default Porfolio
