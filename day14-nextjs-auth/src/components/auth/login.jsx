"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export const Login = () => {
    const router = useRouter()
    const [message, setMessage] = useState("");


    
    async function handleLogin(formData){
        const email = formData.get("email")
        const password = formData.get("password")

        const res = await fetch("https://eventmakers.devscale.id/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password})
        });

        // FORM AKAN DI RESET KETIKA DIA BERHASIL REGISTER
        if(res.status === 200){
            const jsonRes = await res.json()
            // console.log(jsonRes)
            setMessage(jsonRes.message)
            // KETIKA BERHASIL LOGIN, PENGGUNA AKAN MASUK KE DASHBOARD PAGE
            router.push("/dashboard")
        }

        if(res.status === 401 || res.status === 404){
            const jsonRes = await res.json() // Mendefinisikan jsonRes di sini
            setMessage(jsonRes.message)
        }
    }

  return (
    <main>
        <section>
            <h1>LOGIN</h1>
            <p>WELCOME BACK!</p>
        </section>
        <form className="space-y-2" action={handleLogin}>
            <input name="email" placeholder="email"/>
            <input name="password" type="password" placeholder="password"/>
            <button>LOGIN</button>
        </form>
        {message !== "" ? <div>{message}</div> : null }

    </main>
    
  )
}
