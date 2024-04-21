"use client"
import { useRef, useState } from "react";

export const Register = () => {

    const formRef = useRef()
    // useRef mirip dengan getElemenById

    const [message, setMessage] = useState("");


    async function handleRegister(formData){
        const name = formData.get("name")
        const email = formData.get("email")
        const password = formData.get("password")

        const res = await fetch("https://eventmakers.devscale.id/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name, email, password})
        });

        // FORM AKAN DI RESET KETIKA DIA BERHASIL REGISTER
        if(res.status === 201){
            const jsonRes = await res.json()
            // console.log(jsonRes)
            setMessage(jsonRes.message)
            formRef.current.reset()
        }
        // 400
        // FORM TIDAK AKAN DI RESET KETIKA BELUM BERHASIL
        if(res.status === 405 || res.status === 500){
            console.log(jsonRes)
            setMessage(jsonRes.message)
        }
        
    }

  return (
    <main className="space-y-6">
        <section>
            <h1>SIGN UP</h1>
            <p>Create account to have access</p>
        </section>

        <form ref={formRef} className="space-y-2" action={handleRegister}>
            <input name="name" placeholder="name"/>
            <input name="email" placeholder="email"/>
            <input name="password" type="password" placeholder="password"/>
            <button>SIGN UP</button>
        </form>
        {message !== "" ? <div>{message}</div> : null }

    </main>
    
  )
}
