import type { NextPage } from 'next'
import CardIdea from '../components/molecules/index/cardIdea';
import Layout from '../components/templates/layout';
import { useCollection } from '../components/hooks/useCollection';

const Home = () => {

  const { ideas } = useCollection('ideas')

  return (
    <div className="max-w-6xl w-4/5 mx-auto flex justify-between items-stretch flex-wrap">
      {
        ideas && (
          ideas.map((idea: any) => (
            <CardIdea key={idea.id} idea={idea} />
          ))
        )
      }
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
