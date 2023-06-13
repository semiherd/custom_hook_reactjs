const Body= ({hookResponse}) => {
	const {data,error,loading}= hookResponse
 
	return(
    <>
  		{!error && !loading && data?.data?.results?.map((item,index) => <div key={index.toString()}>
          <img
            src={item.urls.small}
            alt="item.alt_description"
          />
        </div>
        )}
        {data?.data?.total==0 && <h1>No Photo Found.</h1>}
    </>
  )
}

export default Body;
