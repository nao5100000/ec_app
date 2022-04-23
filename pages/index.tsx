import type { NextPage } from 'next'
import { useEffect } from 'react';
import CardIdea from '../components/molecules/index/cardIdea';
import Layout from '../components/templates/layout';

import { useRecoilState } from 'recoil'
import { newIdeaState } from '../components/hooks/newIdeaState';

import { IdeaProps, IdeaProperty } from '../types/types';

import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';

const Home = () => {

  const [ideas, setIdeas] = useRecoilState(newIdeaState);
  useEffect(() => {
    const ref = collection(db, 'ideas');
    getDocs(ref)
      .then((snaspshot) => {
        let results: any = []
        snaspshot.docs.forEach(doc => {
          results.push({ id: doc.id, ...doc.data() })
        });
        setIdeas(results)
      })
    console.log(ideas)
  }, [])
  return (
    <div className="max-w-6xl w-4/5 mx-auto flex justify-between items-stretch flex-wrap">
      {
        ideas.map((idea) => (
          <CardIdea key={idea.id} idea={idea} />
        ))
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
