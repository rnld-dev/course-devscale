
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { UserCard } from "@/components/userCard";
import { Tag } from "@/components/tag";
import { Sparkles } from "lucide-react";
import { DashboardLayout } from "@/components/dashboardLayout";

// export default function Home(){
//   return(
//     <>
//     <Header />
//     <div>Hello!</div>
//     <Footer/>
//     <UserCard nama="Rexa" umur={23} gender="male" />
//     <UserCard nama="Rea" umur={23} gender="female" />
//     <UserCard nama="exa" umur={23} gender="male" />
//     </>
//   )
// }


// 2. MAPPING PROPS
// export default function Home(){
//   const student ={
//     nama: "Reyhan",
//     umur: 20,
//     gender: "male"

//   };

//   return (
//     <>
//     <UserCard nama={student.nama} umur={student.umur} gender={student.gender}/>
//     <UserCard {...student} />

//     </>
//   )

// }

// 3. ARRAY - MAPPING PROPS

// export default function Home(){
//   const student = [
//     {nama: "Lidya", umur: 20, gender:"female"},
//     {nama: "Idya", umur: 22, gender:"female"},
//     {nama: "Renal", umur: 20, gender:"male"}
//   ];

//   return (
//     <>
//     {student.map((student) => {
//       return <UserCard key={student.nama} nama={student.nama} umur={student.umur} gender={student.gender} />;
//     })}

//     </>
//   )

// }

// 4. CONTOH MAPPING - CASE MEMBUAT NOTES

// export default function Home(){
//   const notes = ["Belajar coding", "belajar excel", "nonton ulang"] 

//   return (
//     <>
//     <div className="max-w-xl m-auto py-4">
//       <h3 className="text-lg font-bold mb-4">Notes</h3>
//       <div>
//         {notes.map((note, index) => {
//         return (
//           <div key={index}>
//             {index+1}. {note}
//           </div>
//         )
//         })}

//       </div>

//     </div>

//     </>
//   )

// }

// // 5. CHILDREN - contoh 1
// export default function Home(){
//   return(
//     <>
//     <Tag status="success">
//       <Sparkles/>
//       <div>success</div>
//     </Tag>

//     <Tag status="error">
//       <Sparkles/>
//       <div>success</div>
//     </Tag>

//     {/* Intinya klo komponen tsb memuat children kita bisa langsung pake elemen <Komponen> dan ditambah atribut sesuai status */}


//     </>
//   )

// }

// 6. CHILDREN - contoh 2
export default function Home(){
  return(
    <>
    <DashboardLayout> 
      <div>Hello</div> 
    </DashboardLayout>

    

    </>
  )

}