"use client"

// useRouter digunakan untuk refresh data secara otomatis
import { useRouter } from "next/navigation";

export const FormBikinTodo = () => {
  const router = useRouter()

  async function bikinTodo(formData){
    const title = formData.get("title")
    const content = formData.get("content")
    // console.log(title, content)

    const res = await fetch("https://v1.appbackend.io/v1/rows/52aQZKHrxxSx", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify([{title, content}])
    });
    const data = await res.json();
    router.refresh();


  }

  return (
    <div>
        <form action={bikinTodo}>
            <input name="title" placeholder="Masukkan judul"/>
            <input name="content" placeholder="Masukkan konten"/>
            <button>Bikin Todo</button>
        </form> 
    </div>
  );
};

