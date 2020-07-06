import { useCallback, useState } from "react"

export const useHttp = ()=>{
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const request = useCallback(
    async(url, method="GET", body=null, headers={}) => {
      console.log(body)
      if(body){
        body= JSON.stringify(body)
        headers["Content-Type"] = "application/json"
      }
      setLoading(true)
      try {
        const response = await fetch(url, {
          method, body,headers
        }) 
        debugger
        const data = await response.json()
        console.log("Data",data.errors)

        if(!response.ok){
          let errors
          if(data.errors){
            errors = data.errors.map(e=>e.msg)
          }else{
            errors=data.message

          }
          throw new Error(errors || "Что то пошло не так")
        }
        setLoading(false)
        console.log("Data",data)
        return data
        
      } catch (e) {
        let message = e.message.split(",") 
        console.log(message)
        setLoading(false)
        setError(message)
        throw message

      }
    },
    [],)
    const clearError=useCallback(
      () => {
        setError(null)
      },
      [],)
    return {loading, request,clearError,error}
}