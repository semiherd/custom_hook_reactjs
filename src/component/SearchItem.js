import { forwardRef } from "react";

const SearchItem= forwardRef(({searchVal,setSearchVal,searchFn},ref) => {

  const handleInputChange = (e) => {
    setSearchVal(e.target.value);
  }
  const handleSearch = () => {
	ref.current.page= 1
	searchFn({page:1,value:searchVal})
  }
  const handleEnterPress = e => {
    if(e.key === 'Enter' && searchVal.length>1) handleSearch()
  }

  return (
	<>
		<input
			type="search"
			placeholder="Search..."
			value={searchVal}
			onChange={handleInputChange}
			onKeyDown={handleEnterPress}
		/>
		<button onClick={() => handleSearch()} disabled={searchVal.length<2?true:false}>Search</button>
	</>
  )
})
export default SearchItem;
