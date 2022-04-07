import SearchField from '../components/organisms/index/searchField';
import Layout from '../components/templates/layout';

const Search = () => {
    return (
        <div>
            <SearchField />
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