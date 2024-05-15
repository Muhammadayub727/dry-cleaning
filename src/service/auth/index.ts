import { http } from "../config";
import { Request } from "@interface";

export const auth:Request={
    signin: (data)=> http.post("/auth/login",data),
    signup: (data)=> http.post("/auth/register",data),
    verify: (data)=> http.post("/auth/verify",data),
    forgot_password: (data)=> http.post("/auth/forgot-password",data),
    reset: (data)=> http.post("/auth/verify-forgot-password",data),
    
}