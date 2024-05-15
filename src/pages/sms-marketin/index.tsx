

function index() {
  return (
    <div>index</div>
  )
}

export default index











// import { useEffect, useState } from "react";
// import { IconButton, InputBase, Paper } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search"
// import { ToastContainer, toast } from "react-toastify";

// import { Modal1, TestTable } from "@ui";
// import { services } from "@services";
// import useServeceStore from "@store-services"
// import "./style.scss"


// const index = () => {

//     const {getData , data , isLoader , deleteData} = useServeceStore()
    
//     const userId = localStorage.getItem("user-id")
//     const [parms, setParms] =useState({page:1, limit:10 ,owner_id:userId})
//     console.log(data);
    

//     // console.log(email);
    


//     // theder uchun kegan malumotga mos data 
//     const theader = [
//         {title: "" , value:"id"},
//         {title: "T/R" , value:"t/r"},
//         {title: "Xizmat nomi" , value:"name"},
//         {title: "Narxi (so‘m)" , value:"price"},
//         {title: "Action" , value:"action"}
//       ]

//     // const getServese = async ()=>{
//     //     // setLoader(true)
//     //     try{
//     //         const res = await services.servicesGet(parms)
//     //         console.log(res)
//     //         // setData(res.data.services)
//     //         setTimeout(()=>{setLoader(false)}, 300)
//     //     }catch(err){
//     //         console.log(err)
//     //         setLoader(false)
//     //     }
//     // }
    
//     useEffect(()=>{
//         getData(parms)
//     },[parms, getData])

//      // Delete data ids  --------------------------------
//      const [dataIds , setDataIds] = useState([])
//      const deletDataIds:(data:string[])=>void = async(data)=>{
//           try{
//              if(data.length){
//                  data.forEach(async(id:string)=>{
 
//                      const res = await services.servicesDelete(id)
//                      if(res.status === 200){
//                          toast.success("deleted full")
//                         //  getServese()
//                      }
//                  })
//              }
//              setDataIds([])
//          }catch(error){
//              toast.error("Couldn't delete")
//              console.log(error)
//          }
//      }
//      //=====================================================
 


//     return <>
//     <ToastContainer/>
//     <div className="">
//          <h1 className="text-[24px] font-bold ">SMS Marketing</h1>
//     </div>
//     <div className="flex items-center justify-between py-3">
//         <div className="w-96">
//            <Paper 
//            component="form"
//            sx={{p:"2px 4px", width:400 , alignItems: "center" , display: "flex"}}>
//             <InputBase
//              sx={{ml:1 , flex :1}}
//              placeholder="Qidiruv"
//              inputProps={{"aria-label":"serch google maps"}}/>
//             <IconButton type="button" sx={{p: "10px"}} aria-label="search">
//                 <SearchIcon/>
//             </IconButton>

//            </Paper>
//         </div>
//         <div className="flex items-center gap-2">
//           {
//             dataIds.length > 1 ? <button onClick={()=>deletDataIds(dataIds)} className="bg-red-400 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-700 active:bg-red-500 duration-200">O'chirish</button> : null
//           }
//           <Modal1  />
//         </div>
//     </div>
//     <TestTable heders={theader} body={data} skelatonLoader={isLoader} deletIdData={deleteData}  setDataIds={setDataIds} dataIds={dataIds}  />
//     </>
// };

// export default index;