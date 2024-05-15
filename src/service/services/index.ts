import { http } from "../config";

// ----------------> Instance Services <-------------------------------------
export interface postData{
    name: string;
    owner_id?: string|null|undefined;
    price:number |string
}

interface getData{
    page:number;
    limit:number;
    owner_id:string|null|undefined;
}

interface UpdateData extends postData{
    id:string;
}

interface Services{
    servicesPost : (data:postData)=> any,
    servicesDelete : (id:string)=> any,
    servicesGet : (data:getData)=> any,
    servicesUpdate : (data:UpdateData)=> any,
}

// ---------> Interface Srore Services <--------------------
export interface StoreServices {
    isLoader:boolean;
    data:any[];
    getData: (data:getData)=> Promise <any>;
    postData: (data:postData)=> Promise <any>;
    deleteData: (id:string)=> Promise <any>;
    updateData: (data:UpdateData)=> Promise <any>;
}




// ----------------> Instance Services <----------------------------
export const services:Services = {
    servicesPost: (data)=> http.post("/service" , data),
    servicesDelete: (id)=> http.delete(`/service?id=${id}`),
    servicesGet: (data)=> http.get(`/service/all?page=${data.page}&limit=${data.limit}&owner_id=${data.owner_id}`),
    servicesUpdate: (data)=> http.put(`/service`, data)
}