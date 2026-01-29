import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
 <div>Layout</div>
<div><Outlet/></div>
    </div>
   
    
  )
}

export default Layout