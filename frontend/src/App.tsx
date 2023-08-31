import { useEffect, useState } from "react"
import { Video,Header } from "./components"

function App() {
  const [res,setRes] = useState('no response')


  useEffect(()=>{
    fetch('http://127.0.0.1:8000/')
    .then(r =>  r.json() )
    .then(d => setRes(d.response) )
  },[])

  
  return (
    <>
      <Header/>
      <Video/>
      <div>
          BACKEND RESPONSE:{res}
      </div>
    </>

  )
}

export default App
