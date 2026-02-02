import React from 'react'

function Title({title, description}) {
  return (
    <div className='text-center flex flex-col justify-center items-center mt-6 text-white'>
        <h2 className='text-3xl sm:text-4xl font:medium'>{title}</h2>
        <p className='max-sm max-w-2xl mt-4 text-slate-500'>{description}</p>
    </div>
  )
}

export default Title