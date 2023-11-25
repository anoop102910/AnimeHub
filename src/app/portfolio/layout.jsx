import React from 'react'

function Layout({children}) {
  return (
    <div className='mt-10'>
      <h1 className="h1-primary">Our work</h1>
      {children}
    </div>
  )
}

export default Layout
