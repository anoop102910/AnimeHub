import React from 'react'

function BlogLayout({children}) {
  return (
    <div>
      <h1 className='h1-primary mt-10'>Blog</h1>
      {children}
    </div>
  )
}

export default BlogLayout
