import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='w-full bg-white p-2 shadow-md'>
      <ul className='flex justify-end gap-6 mr-4'>
        <li><Link href='project'>Project</Link></li>
        <li><Link href='team'>Team</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
