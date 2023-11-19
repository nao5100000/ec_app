import SearchField from '../components/organisms/index/searchField';
import Layout from '../components/templates/layout';
import { useEffect, useState } from 'react';
import { db } from "../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import CardIdea from '../components/molecules/index/cardIdea';

const Search = () => {
    const [keyword, setKeyword] = useState<string | undefined>();
    const ref = collection(db, 'ideas');

    let ideas: any = [];
    useEffect(() => {
        // getDocs(query(ref, where("title", "in", keyword))).then(snapshot => {
        //     snapshot.forEach(doc => {
        //         // console.log(`${doc.id}: ${doc.data().userName}`);
        //         console.log(doc)
        //     });
        // })
        if (!keyword) {
            return;
        }
        const query2 = query(ref, where("title", "==", [keyword]));

        console.log(keyword);
        console.log(query2);
        getDocs(query2).then((querySnapshot) => {
            //console.log("querySnapshot:", querySnapshot);
            querySnapshot.forEach((doc) => {
                console.log(doc.data());
                ideas.push(doc.data());
                console.log(ideas);
            });
        });
    }, [keyword])
    return (
        <>
            <div>
                <SearchField keyword={keyword} setKeyword={setKeyword} />
            </div>
            <div>
                {
                    ideas && (
                        ideas.map((idea: any) => (
                            <CardIdea key={idea.id} idea={idea} />
                        ))
                    )
                }
            </div>
        </>
    )
}
Search.getLayout = function getLayout(page: any) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}


export default Search;