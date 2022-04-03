import type { NextPage } from 'next'
import Layout from '../components/templates/layout';

const Home = () => {
  return (
    <div>

    </div>
  )
}
Home.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}


export default Home
