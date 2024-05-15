import DeleteIcon from '@mui/icons-material/Delete';
// import { useState } from 'react';



import {ModalServicesEdit} from "@ui"
function Index({tbody , theader , deletIdData ,getServese , setDataIds , dataIds }:any) {

  


  const dataIdisChanged = (id:string) => {
    // console.log(id);
    if(dataIds.length){
      if(dataIds.includes(id)){
          setDataIds(dataIds.filter((item:string) => item!== id))
          // console.log(dataIds);
          
        }else{
          setDataIds([...dataIds, id])
          // console.log(dataIds);
        }
    }else{
      setDataIds([...dataIds , id])
      // console.log(dataIds);
    } 
  }


  // console.log(tbody);
  

  // const theader = [
  //   {title: "" , name:"id"},
  //   {title: "Xizmat nomi" , name:"name"},
  //   {title: "Narxi (so‘m)" , name:"price"},
  //   {title: "Action" , name:"action"}
  // ]

  // const tbody = [
  //   {id: 1, name: "tozalash", price: 1800 , users:359},
  //   {id: 2, name: "qurutish", price:1200 , users:359},
  //   {id: 3, name: "qurutish", price:1200 , users:359},
  //   {id: 4, name: "qurutish", price:1200 , users:359},
  //   {id: 5, name: "qurutish", price:1200 , users:359},
  //   {id: 6, name: "qurutish", price:1200 , users:359},
  // ]


  return <>
    <table className="max-w-[100%] w-full  mx-auto">
      <thead>
        <tr className="bg-[#F9F9F9] " >
          {
            theader.map((item:any, index:number) => {
              return <th key={index} className="border py-3 text-[18px] font-bold">{item.title}</th>
            })
          }
        </tr>
      </thead>
      <tbody>
         {
           tbody.map((item:any, index:number) => {
             return <tr key={index}>
               {
                 theader.map((item2 :any, index2:number) => {
                   return  <td key={index2} className={index % 2 ? "border bg-[#F9F9F9] py-2" : "border py-2"}>{
                    item2.name === "action" ? <div className="w-full flex items-center justify-center gap-1">
                      <button onClick={()=>deletIdData(item.id)} className=" text-slate-500"><DeleteIcon/></button>
                       <ModalServicesEdit data={item} getServese={getServese}/>
                      </div>: item2.name === "id" ? 
                      <div className="w-full flex items-center justify-center">
                        <input type="checkbox" onChange={()=>dataIdisChanged(item?.id)} className=" w-4 h-4" />
                      </div> : item2.name === "t/r" ? <p className=" text-center">{index + 1}</p>  
                      :<p className=" text-center">{item[item2.name]}</p> 
                   }</td>
                 })
               }
             </tr>
           })
         }
      </tbody>
    </table>
  </>
}
export default Index