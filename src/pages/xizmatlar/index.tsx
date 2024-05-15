
import { useEffect, useState } from "react";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"
import { ToastContainer, toast } from "react-toastify";

import { Modal1, TestTable } from "@ui";
import { services } from "@services";
import useServeceStore from "@store-services"
import "./style.scss"


const index = () => {

    const {getData , data , isLoader , deleteData} = useServeceStore()
    
    const userId = localStorage.getItem("user-id")
    const [parms] =useState({page:1, limit:10 ,owner_id:userId})
    

    // theder uchun kegan malumotga mos data 
    const theader = [
        {title: "" , value:"id"},
        {title: "T/R" , value:"t/r"},
        {title: "Xizmat nomi" , value:"name"},
        {title: "Narxi (so‘m)" , value:"price"},
        {title: "Action" , value:"action"}
      ]
    
    useEffect(()=>{
        getData(parms)
    },[parms, getData])

     // Delete data ids  --------------------------------
     const [dataIds , setDataIds] = useState([])
     const deletDataIds:(data:string[])=>void = async(data)=>{
          try{
             if(data.length){
                 data.forEach(async(id:string)=>{
 
                     const res = await services.servicesDelete(id)
                     if(res.status === 200){
                         toast.success("deleted full")
                        //  getServese()
                     }
                 })
             }
             setDataIds([])
         }catch(error){
             toast.error("Couldn't delete")
             console.log(error)
         }
     }
     //=====================================================
 


    return <>
    <ToastContainer/>
    <div className="">
         <h1 className="text-[24px] font-bold ">Xizmatlar</h1>
    </div>
    <div className="flex items-center justify-between py-3">
        <div className="w-96">
           <Paper 
           component="form"
           sx={{p:"2px 4px", width:400 , alignItems: "center" , display: "flex"}}>
            <InputBase
             sx={{ml:1 , flex :1}}
             placeholder="Qidiruv"
             inputProps={{"aria-label":"serch google maps"}}/>
            <IconButton type="button" sx={{p: "10px"}} aria-label="search">
                <SearchIcon/>
            </IconButton>

           </Paper>
        </div>
        <div className="flex items-center gap-2">
          {
            dataIds.length > 1 ? <button onClick={()=>deletDataIds(dataIds)} className="bg-red-400 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-700 active:bg-red-500 duration-200">O'chirish</button> : null
          }
          <Modal1  />
        </div>
    </div>
    <TestTable heders={theader} body={data} skelatonLoader={isLoader} deletIdData={deleteData}  setDataIds={setDataIds} dataIds={dataIds}  />
    </>
};

export default index;

















// import { useEffect , useState} from "react";
// import { ToastContainer , toast } from "react-toastify";

// import {services} from "@services"
// import {  GlobolTeble , Modal1 } from "@ui"
// import "./style.scss"

// const index = () => {
//     const [loader , setLoader] = useState(true)
//     const [data ,setData]= useState([])

//     const userId = localStorage.getItem("user-id")
//     // const formattedEmail = email?.replace("@", "%40")
//     // console.log(email);
    


//     // theder uchun kegan malumotga mos data 
//     const theader = [
//         {title: "" , name:"id"},
//         {title: "T/R" , name:"t/r"},
//         {title: "Xizmat nomi" , name:"name"},
//         {title: "Narxi (so‘m)" , name:"price"},
//         {title: "Action" , name:"action"}
//       ]

//     const getServese = async ()=>{
//         const res = await services.servicesGet({page:1, limit:10 ,owner_id:userId})
//         // console.log(res)
//         setData(res.data.services)
//         setTimeout(()=>{setLoader(false)}, 1000)
//     }
    
//     useEffect(()=>{
//         getServese() 
//     },[])

//     // Delete the service name --------------------------------
//     const deletIdData = async (id:string)=>{
//         try{
//             const res = await services.servicesDelete(id)
//             if(res.status === 200){
//                 toast.success("deleted full")
//                 getServese()
//             }
//         }catch(error){
//             toast.error("Couldn't delete")
//             console.log(error)
//         }
//     }

//     //================================================================

    
//     // Delete data ids  --------------------------------
//     const [dataIds , setDataIds] = useState([])
//     const deletDataIds = async(data:string[])=>{
//          try{
//             if(data.length){
//                 data.forEach(async(id:string)=>{

//                     const res = await services.servicesDelete(id)
//                     if(res.status === 200){
//                         toast.success("deleted full")
//                         getServese()
//                     }
//                 })
//             }
//             setDataIds([])
//         }catch(error){
//             toast.error("Couldn't delete")
//             console.log(error)
//         }
//     }
//     //=====================================================

//     return <>
//     <ToastContainer />


//         {
//             loader ? <div className=" fixed top-0 left-0 w-full h-[100vh]  flex items-center justify-center z-150">
//                         <div className="loader"></div>
//                     </div>
//             :<div>
//                 <div className="flex items-center justify-between mb-3">
//                    <h1 className="text-[24px] font-bold ">Xizmatlar</h1>
//                    <div className="flex items-center gap-3">
//                       {
//                         dataIds.length > 1 ? <button onClick={()=>deletDataIds(dataIds)} className="bg-red-400 text-white py-2 px-4 rounded-md">All delete</button> : null
//                       }
//                       <Modal1 />
//                    </div>
//                 </div>
//                 {
//                     data ? <GlobolTeble tbody={data} theader={theader} deletIdData={deletIdData} getServese={getServese}  setDataIds={setDataIds} dataIds={dataIds}/>
//                     : <h1 className="text-[24px] text-center text-red-400  ">Malimot topilmadi 😓 , iltimos janob malumot qo'shing 😊 </h1>
//                 }

//             </div>
            
//         } 
//     </>
// };

// export default index;