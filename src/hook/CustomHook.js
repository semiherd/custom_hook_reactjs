import {useEffect,useState} from 'react'
import axios from 'axios'

export default function useCustomHook(param){
	const [loading,setLoading]= useState(false)
	const [error,setError]= useState(null)
	const [data,setData]= useState(null)

	async function fetchData(param){
		try{
			const {page,value}=param
			const url= `https://api.unsplash.com/search/photos?page=${page}&per_page=15&query=${value}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
			const response= await axios.get(url)
		  return response
		}catch(e){
			setError(e)
		}
	}
	const refreshFn = (i)=>{
		setLoading(true)
		fetchData(i)
			.then((response) => setData(response))
			.catch((e) => setError(e))
			.finally(() => setLoading(false))
	}
		
	useEffect(() => {
			refreshFn(param)
	},[])

	return {
		data,
		loading,
		error,
		refreshFn
	}
}