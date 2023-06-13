import {forwardRef} from 'react'
import SearchItem from './SearchItem'
import LinearProgress from '@mui/joy/LinearProgress';

const Header= forwardRef((props,ref) => {
  const {hookResponse,setSearchVal,searchVal}= props
  const {data,error,loading,refreshFn}= hookResponse

  async function refresh(){
    try{
      if(!error){
        ref.current.page += parseInt(1);
        const param= {
          page: ref.current.page,
          value: searchVal
        }
        refreshFn(param)
      }
    }catch(e){
      console.log(e)
    }
  }
  const NextButton= () => {
    return <button onClick={() => refresh()}>Next Page</button>
  }
  const Info= () => {
    return <h4>You reached end of the gallery</h4>
  }

  return(
    <>
        <div className="info">
          <h1>Unsplash Gallery</h1>
          {loading && <LinearProgress color="primary" />}
        </div>
        <div className="info-container">
          <div className="search">
            <SearchItem ref={ref} searchVal={searchVal} setSearchVal={setSearchVal} searchFn={refreshFn} />
          </div>
          <div className="page">
              {error? <Info />:<NextButton />}
          </div>
        </div>
    </>
  )
})

export default Header;
