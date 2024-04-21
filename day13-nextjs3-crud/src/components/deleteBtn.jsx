"use client"

import { useRouter } from "next/navigation"

// id didapatkan dengan props
export const DeleteBtn = ({id}) => {
    const router = useRouter()
    async function hapusTode(){
        await fetch("https://v1.appbackend.io/v1/rows/52aQZKHrxxSx",
            {method: "DELETE",
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify([id])

    });
    router.refresh();
    }

    return <button className="w-fit text-xs" onClick={hapusTode}>Delete</button>
}

