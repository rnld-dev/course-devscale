import React from 'react'

// INI BERLAKU BUAT REGISTER DAN LOGIN YANG ADA DI AUTH
export default function Layout({children}) {
  return (
    <main className='h-screen grid grid-cols-2'>
        <div className='bg-indigo-500'></div>
        <div className="flex justify-center items-center "> 
            <div className="w-[240px]"> {children} </div>
        </div>
    </main>
  )
}
