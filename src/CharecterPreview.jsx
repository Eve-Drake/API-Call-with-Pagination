import React from 'react'

const CharecterPreview = ({name}) => {
  return (
    <div className='block p-6 rounded-lg shadow-lg bg-white max-w-sm border border-indigo-600 m-2'>
      {name}
    </div>
  )
}

export default CharecterPreview