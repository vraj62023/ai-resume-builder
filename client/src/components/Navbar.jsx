import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
    const user = {name:'John Doe'}
    const navigate  = useNavigate()
    const logoutUser=()=>{
        navigate('/')
    }
  return (
    <div className='shadow bg-wite'>
         <nav className='flex items-center justify-between max-w-7xl  text-slate-800 mx-auto px-4 py3.5 transition-all'>
            <Link to='/'>
                <img src="/logo.png" alt="logo" className='h-15 w-auto' />
            </Link>
            <div className='flex items-center gap-4 text-sm'>
                <p className='max-sm:hidden '>Hi, {user?.name}</p>
                <button onClick={logoutUser} className='bg-white hover:bg-slate-50 border border-gray-300 px-7 py-1.5 rounded-full active:scale-95 transition-all'>LOGOUT</button>
            </div>
         </nav>
    </div>
  )
}

export default Navbar