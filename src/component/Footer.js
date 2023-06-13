import React,{forwardRef} from "react"

const Footer = forwardRef((props,ref) => {
	const {hookResponse,searchVal}= props
	const {error,refreshFn}= hookResponse

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

	return (
		<>
			<div className="page">
        {error? <Info />:<NextButton />}
      </div>
		</>
	)
})

export default Footer;

