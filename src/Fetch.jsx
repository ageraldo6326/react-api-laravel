import { useState, useEffect } from "react"


function Fetch() {

  const [data,setData] = useState(null)

  useEffect(() => {

    fetch('http://127.0.0.1:8000/api/usuarios')
    
      .then(response => response.json())
    
      .then(data => setData(data))
    
      .catch(error => console.log(error));

  },[])

  return(
    <>
    <h1>Lista de usuarios</h1>
    <ul>
      {data?.map( (user) => (<li key={user.id}>{user.name}</li>) )}
    </ul>
    </>
  )
}

export default Fetch