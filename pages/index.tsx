import type { NextPage } from 'next'
import CardIdea from '../components/molecules/index/cardIdea';
import Layout from '../components/templates/layout';

const Home = () => {
  return (
    <div className="max-w-6xl w-4/5 mx-auto flex justify-between items-stretch flex-wrap">
      <CardIdea />
      <CardIdea />
      <CardIdea />
      <CardIdea />
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
