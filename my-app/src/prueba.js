import React, {useState, useEffect} from 'react'

const Search = () => {
  
  const [ users, setUsers ] = useState([])
  const [ search, setSearch ] = useState("")

  
  const URL = 'https://jsonplaceholder.typicode.com/users'

  /*const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    //console.log(data)
    setUsers(data)
  } */
  const showData = () => {
    fetch(URL)
    .then((res) => res.json())
    .then((data) => setUsers(data))
    .catch((error) => console.log(error))
  }  
   //función de búsqueda
  const searcher = (e) => {
      e.preventDefault();
      setSearch(e.target.value)   
  }
   //metodo de filtrado 1 
   /*  let results = []
   if(!search)
   {
       results = users
   }else{
        results = users.filter( (dato) =>
        dato.name.toLowerCase().includes(search.toLocaleLowerCase())
    )
   } */

   
   const results = !search ? users : users.filter((dato)=> dato.name.toLowerCase().includes(search.toLocaleLowerCase()))
  
   useEffect( ()=> {
    showData()
  }, [])
 
  return (
    <div>
        <input value={search} onChange={searcher} type="text" placeholder='Search' className='form-control'/>
        <select className="form-select" aria-label="Default select example">
            <option selected>Región</option>
            <option value="1">Arica</option>
            <option value="2"></option>
            <option value="3">Three</option>
        </select>
        <table className='table table-striped table-hover mt-5 shadow-lg'>
            <thead>
                <tr className='bg-curso text-white'>
                    <th>Resultados</th>
                    
                </tr>
            </thead>
            <tbody>
                { results.map( (user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        
                    </tr>                    
                ))}
            </tbody>
        </table>
    </div>
  )
}
export default Search;