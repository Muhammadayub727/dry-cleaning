import axios from "axios";

const http:any = axios.create({
    baseURL: "https://app.olimjanov.uz/v1"
})

 http.interceptors.request.use((config:any)=>{
    let token = localStorage.getItem("acses-token");//localStorage.getItem("token")
    if(token){
        config.headers.Authorization = ` ${token}`;
    }
    return config;
})

export  { http };

