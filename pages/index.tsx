import type { NextPage } from 'next'
import SearchField from '../components/organisms/index/searchField';
import Layout from '../components/templates/layout';

const Home = () => {
  return (
    <div>
      <SearchField />
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
