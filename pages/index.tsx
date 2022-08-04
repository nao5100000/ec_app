import type { NextPage } from 'next'
import CardIdea from '../components/molecules/index/cardIdea';
import Layout from '../components/templates/layout';
import { useCollection } from '../components/hooks/useCollection';
import { useRecoilValue } from 'recoil';
import { userState } from '../components/lib/recoil/userState';
import { currentUser } from '../firebase/config';
import LoginLayout from '../components/templates/loginLayout';
import { getAuth, onAuthStateChanged } from "firebase/auth";
const Home = () => {
  const { ideas } = useCollection('ideas')
  const user = useRecoilValue(userState)
  console.log(currentUser)
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
  const auth = getAuth();
  return (
    <LoginLayout>
      {page}
    </LoginLayout>
  )
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //   } else {
  //     return (
  //       <Layout>
  //         {page}
  //       </Layout>
  //     )
  //   }
  // });
}


export default Home
