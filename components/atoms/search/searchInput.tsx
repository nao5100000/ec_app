const SearchInput = ({ keyword, setKeyword }) => {
    return <input type="text" className="bg-white w-full placeholder:text-slate-400 rounded-l-md border p-4 shadow-inner h-12 placeholder:text-gray-300 bg-light-gray03" placeholder="キーワードを入力ください" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
}

export default SearchInput;