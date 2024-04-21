import { FormBikinTodo } from "@/components/createForm";
import { DeleteBtn } from "@/components/deleteBtn";
import { ItemTodo } from "@/components/itemTodo";

export default async function Home() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/52aQZKHrxxSx/", {
    cache: "no-store"
  });
  const {data} = await res.json()

  console.log(data)
  
  return (
    <main className="max-w-xl m-auto my-5 space-y-4">
      <h3>My Todo List</h3>
      <FormBikinTodo/>

      <section className="space-y-4">
        {/* item digunakan sbg argumen untuk menampung data */}
        {data.map((item) =>{
          return (
            // <div key={item._id}>
            //   <h4>{item.title}</h4>
            //   <p>{item.content}</p>
            //   <DeleteBtn id={item._id}/>
            // </div>

            // itemTodo punya 3 buah props (dari komponen itemTodo.jsx) / STATE
            <ItemTodo key={item._id} id={item._id} title={item.title} content={item.content} />
          )
        } )}
      </section>
    </main>
  );
}
