import axios from 'axios';
import { useEffect, useState } from 'react'
import Pagination from './Pagination';
import CharecterPreview from './CharecterPreview'

function App() {
  const [data, setData] =  useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const charectersPerPage = 5;

  const lastIndex = currentPage * charectersPerPage;
  const firstIndex = lastIndex - charectersPerPage;
  const currentCharecterList = data.slice(firstIndex, lastIndex)

  const changePage = (pageNumber)=>{
    setCurrentPage(pageNumber)
  }

  useEffect(()=>{
    getData();
  },[])

  const getData = async () =>{
    try{
      const response = await axios.get('http://localhost:3000/charecters/all')
      setData(response.data)
    }
    catch(err){
      console.error(err)
    }
  }

  return (
    <div>
      {currentCharecterList.map((el)=>(
        <CharecterPreview key={el.id} name={el.name}/>
      ))}
      <Pagination 
        totalCharecters = {data.length}
        charectersPerPage={charectersPerPage}
        changePage={changePage}
        currentPage={currentPage}
      />
    </div>
  )
}

export default App
