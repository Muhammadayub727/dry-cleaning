// --------- Authorization  -------------

export interface Signin{
    email: string;
    password: string|number;
}

export interface Signup extends Signin{
    full_name: string;
    phone_number: string;
}

interface Verify {
    code: string;
    email: string;
}

export interface ResetPassword{
    email: string;
    code: string;
    new_password?: string;
}

interface email{
    email: string;
}


export interface Request{
    signin:(data:Signin)=>any,
    signup:(data:Signup)=>any,
    verify:(data:Verify)=>any,
    forgot_password:(data:email)=>any;
    reset:(data:ResetPassword)=>void
}




// ------------------------------------