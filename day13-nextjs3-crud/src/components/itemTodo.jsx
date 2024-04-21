"use client"
import { DeleteBtn } from "./deleteBtn"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { userAgent } from "next/server"

export const ItemTodo = ({id, title, content}) => {
    const [isEditMode, setIsEditMode] = useState(false)
    const router = useRouter()

    async function updateTodo(formData){
        const title = formData.get("title")
        const content = formData.get("content")
        console.log(title, content)

        await fetch("https://v1.appbackend.io/v1/rows/52aQZKHrxxSx", {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify({_id:id, title, content })
            //  id diambil dari id yg sudah di props
        });

    setIsEditMode(false)
    router.refresh()
    
    
    }
    
  return (
    <div>
        {isEditMode ? 
        (<form action={updateTodo}>
            <input name="title" defaultValue={title}/>
            <input name="content" defaultValue={content}/>
            <button className="text-xs w-fit">UPDATE</button>
        </form>) : 
        (<div>
            <h4>{title}</h4>
            <p>{content}</p>
            <div className="flex gap-2">
                <button className="text-xs w-fit" onClick={() => setIsEditMode(true)}>Edit</button>
                <DeleteBtn id={id}/>
            </div>
        </div>)
        }
        
        {/* flex gap 2 supaya tombolnya samping menyamping */}

    </div>
  )
}
