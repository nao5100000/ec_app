import SearchField from '../components/organisms/index/searchField';
import Layout from '../components/templates/layout';
import { useEffect, useState } from 'react';
import { db } from "../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

const Search = () => {
    const [keyword, setKeyword] = useState<string | undefined>();
    const ref = collection(db, 'ideas');

    const [idea, setIdea] = useState();
    let query2 = query(ref, where("title", "==", keyword));
    useEffect(() => {
        // getDocs(query(ref, where("title", "in", keyword))).then(snapshot => {
        //     snapshot.forEach(doc => {
        //         // console.log(`${doc.id}: ${doc.data().userName}`);
        //         console.log(doc)
        //     });
        // })
        console.log(keyword)
        getDocs(query2).then((querySnapshot) => {
            console.log("querySnapshot:", querySnapshot);
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
            });
        });
    }, [keyword])
    return (
        <div>
            <SearchField keyword={keyword} setKeyword={setKeyword} />
        </div>
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