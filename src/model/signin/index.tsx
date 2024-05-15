import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState , useEffect } from "react";

import { auth } from "@auth";
import { schemaLogin, email, codePassword } from "@valideshin";
import "./style.scss";

function Index() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [emailUser, setEmailUser] = useState("");

  

  // interfase--------------------------------
  interface initialValues {
    email: string;
    password: string;
  }
  const initialValues: initialValues = {
    email: "",
    password: "",
  };
  //==========================================

  // Form subnit  register--------------------------------------------------------
  const handelSubmit = async (value: initialValues) => {
    // console.log(value);
    try {
      const response = await auth.signin(value);
      // console.log(response);
      if (response.status === 200) {
        localStorage.setItem("acses-token", response?.data?.access_token);
        localStorage.setItem("refresh-token", response?.data?.refresh_token);
        localStorage.setItem("user-id", response?.data?.id);
        localStorage.setItem("email", response?.data?.email);
        toast.success(" Tizimga  muofaqiyatli kiritildi");
        setTimeout(() => {
          navigate("/main");
        }, 500);
      }
    } catch (err) {
      toast.error(" Email yoki parol noto'g'ri kiritildi");
      console.log(err);
    }
  };
  //================================================================

  
// Function useEffect ---------------------------------
const [secondsLeft, setSecondsLeft] = useState(60);
useEffect(() => {
   let timer = null;
   if(modal2){
     timer = setInterval(() => {
       setSecondsLeft((prevSecond)=> prevSecond - 1);
     }, 1000);
    }
    return () => {
      if(timer) clearInterval(timer);
    }
  },[modal2]);

  useEffect (() => {
    if(secondsLeft === 0){
      setModal2(false);
      setSecondsLeft(60);

    }
  },[secondsLeft , setModal2]);

//================================================================

 //------------------------------------------------------------- 
  interface valyu {
    email: string;
  }
  const initialValues2: valyu = {
    email: "",
  };

  interface codePassword {
    code: string;
    new_password: string;
  }
  const initialValues3: codePassword = {
    code: "",
    new_password: "",
  };

  //===================================================



  // Form subnit  sms email--------------------------------------------------------
  const handelSubmit2 = async (value: valyu) => {
    try {
      const res = await auth.forgot_password(value);
      if (res.status === 200) {
        toast.success("Sizga kod yuborildi");
        setEmailUser(value.email);
        setModal(false);
        setModal2(true);
      }
    } catch (err) {
      toast.error("Hatolik mavjud");
      console.log(err);
    }
  };
  //============================================================================


  // Form subnit  email code --------------------------------------------------------
  const handelSubmit3 = async(value: codePassword) => {
    // console.log(value);
    const newValue = {...value, email: emailUser} 
    try{
      const res:any = await auth.reset(newValue)
      if(res.status === 201){
        setModal2(false);
        setEmailUser("");
        toast.success("Parol muofaqiyatli tiklandi !");
      }

    }catch (err) {
      toast.error("Hatolik mavjud");
      console.log(err);
    }
  }
  //============================================================================



  return (
    <>
      {modal && (
        <div className=" fixed top-0 left-0 flex bg-[rgba(0,0,0,0.6)] items-center justify-center z-50 w-full h-[100vh]">
          <div className=" relative px-20 py-10 rounded-lg bg-white shadow-2xl flex flex-col items-center justify-center gap-[10px] ">
            <h1 className="text-[46px] font-bold text-center">
              Parolni tiklash
            </h1>
            <h1 className="text-[20px] font-semibold text-sky-500 mb-3">
              Sizga kod yuborishimiz uchun email’ingizni kiriting
            </h1>
            <Formik
              initialValues={initialValues2}
              validationSchema={email}
              onSubmit={handelSubmit2}
            >
              <Form className=" max-w-[600px]  w-full flex flex-col gap-[12px]">
                <Field
                  as={TextField}
                  label="Email"
                  sx={{ "& input": { color: "#00000", fontSize: "20px" } }}
                  type="email"
                  name="email"
                  className=" w-[100%]  mb-3 outline-none py-0"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="mb-3 text-red-500 text-center"
                />
                <Button
                  sx={{ fontSize: "16px", fontWeight: "600" }}
                  variant="contained"
                  type="submit"
                  className="w-[100%] py-3"
                >
                  Kod yuborish
                </Button>
              </Form>
            </Formik>
            {/* <button className="py-2 px-16 text-white bg-sky-500 hover:bg-sky-700 active:bg-sky-500 duration-200 rounded-lg">Davom etish</button> */}
            <button
              onClick={() => setModal(false)}
              className=" absolute top-2 right-2 py-1 px-2 bg-transparent hover:shadow-sm rounded-lg duration-200"
            >
              <i className="bi bi-box-arrow-up-right text-sky-700"></i>
            </button>
          </div>
        </div>
      )}
      {modal2 && (
        <div className=" fixed top-0 left-0 flex bg-[rgba(0,0,0,0.6)] items-center justify-center z-50 w-full h-[100vh]">
          <div className=" relative px-20 py-10 rounded-lg bg-white shadow-2xl flex flex-col items-center justify-center gap-[10px] ">
            <h1 className="text-[46px] font-bold text-center">
              Parolni tiklash
            </h1>
            <h1 className="text-[20px] font-semibold text-sky-500 mb-3">
              Sizga yuborilgan kodni va yangi parolni kiriting
            </h1>
            <Formik
              initialValues={initialValues3}
              validationSchema={codePassword}
              onSubmit={handelSubmit3}
            >
              <Form className=" max-w-[600px]  w-full flex flex-col gap-[12px]">
                <Field
                  as={TextField}
                  label="Code"
                  sx={{ "& input": { color: "#00000", fontSize: "20px" } }}
                  type="text"
                  name="code"
                  className=" w-[100%]  mb-3 outline-none py-0"
                />
                <ErrorMessage
                  name="code"
                  component="p"
                  className="mb-3 text-red-500 text-center"
                />

                <Field
                  as={TextField}
                  label="New password"
                  sx={{ "& input": { color: "#00000", fontSize: "20px" } }}
                  type={showPassword2 ? "text" : "password"}
                  name="new_password"
                  className=" w-[100%] mb-3 outline-none py-0"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword2(!showPassword2)}
                          edge="end"
                        >
                          {showPassword2 ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <ErrorMessage
                  name="new_password"
                  component="p"
                  className="mb-3 text-red-500 text-center"
                />
                <p className="text-[16px] text-sky-500">Vaqtingiz : <span className={secondsLeft< 30 ? "text-red-500" : ""}>{secondsLeft}  soniya</span></p>
                <Button
                  sx={{ fontSize: "16px", fontWeight: "600" }}
                  variant="contained"
                  type="submit"
                  className="w-[100%] py-3"
                >
                  parolni tiklash
                </Button>
              </Form>
            </Formik>
            <button
              onClick={() => setModal2(false)}
              className=" absolute top-2 right-2 py-1 px-2 bg-transparent hover:shadow-sm rounded-lg duration-200"
            >
              <i className="bi bi-box-arrow-up-right text-sky-700"></i>
            </button>
          </div>
        </div>
      )}
      <div className="login-wrp w-full h-[100vh] flex items-center justify-center">
        <div className=" py-10 px-20 rounded-xl shadow-2xl bg-[rgba(250,250,250,0.85)]">
          <h1 className="text-center mb-5 text-[56px] font-bold">
            Tizimga kirish
          </h1>
          <Formik
            initialValues={initialValues}
            validationSchema={schemaLogin}
            onSubmit={handelSubmit}
          >
            <Form className=" w-[550px]   flex flex-col gap-[15px]">
              <Field
                as={TextField}
                label="Email"
                sx={{ "& input": { color: "#00000", fontSize: "20px" } }}
                type="email"
                name="email"
                className=" w-[100%] mb-3 outline-none py-0"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="mb-3 text-red-500 text-center"
              />

              <p
                onClick={() => {
                  setModal(true);
                  localStorage.clear();
                }}
                className="text-[20px] text-sky-500 ml-[60%] hover:text-sky-700 duration-200 cursor-pointer"
              >
                Parolni unutdingizmi?
              </p>

              <Field
                as={TextField}
                label="Parol"
                sx={{ "& input": { color: "#00000", fontSize: "20px" } }}
                type={showPassword ? "text" : "password"}
                name="password"
                className=" w-[100%] mb-3 outline-none py-0"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <ErrorMessage
                name="password"
                component="p"
                className="mb-3 text-red-500 text-center"
              />

              <Button
                sx={{ fontSize: "16px", fontWeight: "600", padding: "14px" }}
                variant="contained"
                type="submit"
                className="w-[100%] "
              >
                tizimga kirish
              </Button>
            </Form>
          </Formik>
          <p className="ml-[20%] text-center mt-2 text-[20px] flex items-center gap-2">
            Hisobingiz yo‘qmi?
            <span
              onClick={() => navigate("/")}
              className=" text-sky-500 hover:text-sky-700 duration-300 border-b border-sky-300 font-medium cursor-pointer"
            >
              Ro‘yxatdan o‘tish
            </span>
          </p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Index;
