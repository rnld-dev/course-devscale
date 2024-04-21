"use client"

import { useState } from 'react'
import { useEffect } from 'react';

export default function Page() {
    // MENAMPILKAN USERNAME DENGAN STATE
    const [name, setName] = useState("");

    // PAKAI USE EFFECT BIAR DIA DIJALANKAN SAAT KOMPONEN SUDAH DI MAUNT/BERUBAH
    useEffect(() => {
        const userData = localStorage.getItem("userdata")
        
        if(userData){
            const parsedUser = JSON.parse(userData)
            setName(parsedUser.name)
        }

    }, [])

  return (
    <main>
        <header className="p-6 flex justify-between">
            <div>DASHBOARD</div>
            <div>{name}</div>
        </header>
    </main>
  )
}
