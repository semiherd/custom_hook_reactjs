import {useRef,useState} from 'react'
import useCustomHook from'./hook/CustomHook'
import './App.css'
import Header from './component/Header'
import Body from './component/Body'
import Footer from './component/Footer'

function App(){
  const pageRef= useRef({
    page:1,
  })
  const [searchVal,setSearchVal]= useState("nature")
  const hookResponse= useCustomHook({page:pageRef.current.page,value:searchVal})
  const {data,loading}= hookResponse
  return(
    <div className="app">
      <section className="app-header">
        {hookResponse && <Header ref={pageRef} hookResponse={hookResponse} setSearchVal={setSearchVal} searchVal={searchVal} />}
      </section>
      <section className="app-body">     
        {hookResponse && <Body hookResponse={hookResponse} />}
      </section>
      <section className="app-footer">
        {!loading && data && <Footer ref={pageRef} hookResponse={hookResponse} setSearchVal={setSearchVal} searchVal={searchVal} />}
      </section>
    </div>
  )
}

export default App;
