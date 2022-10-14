
const Pagination = ({totalCharecters, charectersPerPage, changePage, currentPage}) => {
    let numbers = []

    for (let i = 1; i< Math.ceil(totalCharecters/charectersPerPage); i++){
        numbers.push(i)
    }

    const handleBack = () =>{
      changePage(currentPage - 1) 
    }

    const handleNext =()=>{
      changePage(currentPage + 1)
      
    }

  return (
    <ul className='flex flex-row'>
      <button disabled={currentPage === 1} onClick={handleBack} className='px-8 py-3 rounded focus:outline-none disabled:opacity-25'>Back</button>
        {numbers.map(i => (
          <li key={i}>
            <button onClick={() => changePage(i)} className='px-8 py-3 rounded focus:outline-none disabled:opacity-25'>
              {i}
            </button>
          </li>
        ))}
      <button disabled={currentPage === numbers.pop()}onClick={handleNext} className='px-8 py-3 rounded focus:outline-none disabled:opacity-25'>Next</button>
    </ul>
  )
} 

export default Pagination