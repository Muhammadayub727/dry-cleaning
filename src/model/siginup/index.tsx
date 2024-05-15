import { Formik, Form, Field, ErrorMessage } from "formik";
import { useMask } from "@react-input/mask";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ToastContainer, toast } from 'react-toastify';

import { schema , schema2} from "@valideshin";
import {auth }from "@auth";
import "./style.scss";

function Index() {

  const inputRef = useMask({mask: "+998 (__) ___-__-__",replacement: { _: /\d/ },});
  const [showPassword , setShowPassword] = useState(false);
  const [messeg, setMasseg] = useState(false);
  const [messeg2, setMasseg2] = useState(false);
  const [emailUser, setEmailUser] = useState("");
  const navigate = useNavigate();

  // interfase---------------------------------------------
  interface initialValues {
    email: string;
    full_name: string;
    password: string;
    phone_number: string;
  }
  const initialValues: initialValues = {
    email: "",
    full_name: "",
    password: "",
    phone_number: "",
  };
  interface initialValues2 {
    code: string;
  }
  const initialValues2: initialValues2 = {
    code: "",
  };
  interface verifyData {
    email: string;
    code: string;
  }
  //==========================================


  //====================================

  // Form subnit  register--------------------------------------------------------
  const handelSubmit = async (value: initialValues) => {
    const phone = value.phone_number.replace(/\D/g, "");
    const newFormData = { ...value, phone_number: `+${phone}` };
    try {
      const response = await auth.signup(newFormData);
      if (response.status === 200) {
        toast.success("Muoffaqiyatli ro'yhatdan otdingiz")
        setEmailUser(value?.email);
        setMasseg(true);
      }
    } catch (err) {
      toast.error(" Hatolik ...")
      console.log(err);
    }
  };
  //============================================================================

  // Form subnit  verify--------------------------------------------------------
  const handelSubmit2 = async (value: any) => {

    const newCode: verifyData = {
      code: value.code,
      email: emailUser,
    };

    try {
      const res = await auth.verify(newCode);
      console.log(res);
      if (res.status === 201) {
        setMasseg2(false);
        setEmailUser("");
        toast.success("Muoffaqiyatli saqlandi")
        setTimeout(() => {navigate("/signin");},1000)
      }
    } catch (err) {
      toast.error("Hatolik mavjud... " )
      console.log(err);
    }
  };
  //============================================================================


  // Function useEffect Time ---------------------------------
const [secondsLeft, setSecondsLeft] = useState(60);
useEffect(() => {
   let timer = null;
   if(messeg2){
     timer = setInterval(() => {
       setSecondsLeft((prevSecond)=> prevSecond - 1);
     }, 1000);
    }
    return () => {
      if(timer) clearInterval(timer);
    }
  },[messeg2]);

  useEffect (() => {
    if(secondsLeft === 0){
      setMasseg2(false);
      setSecondsLeft(60);

    }
  },[secondsLeft , setMasseg2]);

//================================================================

// Function useEffect Token ====-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // useEffect(() => {
  //   if(localStorage.getItem("acses-token")){
  //      navigate("/main")
  //   }
  // }, []);
//=-=-=--=-=--=-=-=--=--==--=--=--=--=--=--=--=--=--=-==-`=-=-`======

  return (
    <>
      {messeg && (
        <div className=" fixed top-0 left-0 bg-[rgba(0,0,0,0.6)]  flex items-center justify-center z-50 w-full h-[100vh]">
          <div className=" relative px-20 py-10 rounded-lg bg-white shadow-2xl flex flex-col items-center justify-center gap-[10px] ">
            <i className="bi bi-check2-square text-[35px] text-sky-500"></i>
            <h1 className="text-[20px] font-semibold text-sky-500">
              Kod emailga yuborildi
            </h1>
            <button
              onClick={() => {
                setMasseg2(true);
                setMasseg(false);
              }}
              className="py-2 px-16 text-white bg-sky-500 hover:bg-sky-700 active:bg-sky-500 duration-200 rounded-lg"
            >
              Davom etish
            </button>
            <button
              onClick={() => setMasseg(false)}
              className=" absolute top-2 right-2 py-1 px-2 bg-transparent hover:shadow-sm rounded-lg duration-200"
            >
              <i className="bi bi-box-arrow-up-right text-sky-700"></i>
            </button>
          </div>
        </div>
      )}
      {messeg2 && (
        <div className=" fixed top-0 left-0 bg-[rgba(0,0,0,0.6)]  flex items-center justify-center z-50 w-full h-[100vh]">
          <div className=" relative px-20 py-10 rounded-lg bg-white shadow-2xl flex flex-col items-center justify-center gap-[10px] ">
            <h1 className="text-[20px] font-semibold text-sky-500 mb-3">
              Emailga yuborilgan codni kiriting
            </h1>
            <Formik
              initialValues={initialValues2}
              validationSchema={schema2}
              onSubmit={handelSubmit2}
            >
              <Form className=" max-w-[600px]  w-full flex flex-col gap-[12px]">
                <Field
                  as={TextField}
                  label="Codni kiriting"
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
                <p className="text-[16px] text-sky-500">Vaqtingiz : <span className={secondsLeft< 30 ? "text-red-500" : ""}>{secondsLeft}  soniya</span></p>
                <Button
                  sx={{ fontSize: "16px", fontWeight: "600" }}
                  variant="contained"
                  type="submit"
                  className="w-[100%] py-3"
                >
                  yuborish
                </Button>
              </Form>
            </Formik>
            {/* <button className="py-2 px-16 text-white bg-sky-500 hover:bg-sky-700 active:bg-sky-500 duration-200 rounded-lg">Davom etish</button> */}
            <button
              onClick={() => setMasseg2(false)}
              className=" absolute top-2 right-2 py-1 px-2 bg-transparent hover:shadow-sm rounded-lg duration-200"
            >
              <i className="bi bi-box-arrow-up-right text-sky-700"></i>
            </button>
          </div>
        </div>
      )}
      <div className="register-wrp w-full h-[100vh] flex items-center justify-center">
        <div className=" py-6 px-16 rounded-xl shadow-2xl bg-[rgba(250,250,250,0.95)]">
          <h1 className="text-center mb-5 text-[56px] font-bold">
            Ro‘yxatdan o‘tish
          </h1>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handelSubmit}
          >
            <Form className=" max-w-[600px]  w-full flex flex-col gap-[12px]">
              <Field
                as={TextField}
                label="Ismingiz"
                sx={{ "& input": { color: "#00000", fontSize: "20px" } }}
                type="text"
                name="full_name"
                className=" w-[100%]  mb-3 outline-none py-0"
              />
              <ErrorMessage
                name="full_name"
                component="p"
                className="mb-3 text-red-500 text-center"
              />

              <Field
                as={TextField}
                label="Telefon raqamingiz"
                sx={{ "& input": { color: "#00000", fontSize: "20px" } }}
                type="tel"
                inputRef={inputRef}
                name="phone_number"
                className=" w-[100%] mb-3 outline-none py-0"
              />
              <ErrorMessage
                name="phone_number"
                component="p"
                className="mb-3 text-red-500 text-center"
              />

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

              {/* <Field
                as={TextField}
                label="Parolni tasdiqlash"
                sx={{ "& input": { color: "#00000", fontSize: "20px" } }}
                type="password"
                name="password"
                className=" w-[100%] mb-3 outline-none py-0"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="mb-3 text-red-500 text-center"
              /> */}
              <Button
                sx={{ fontSize: "16px", fontWeight: "600" }}
                variant="contained"
                type="submit"
                className="w-[100%] py-3"
              >
                Ro‘yxatdan o‘tish
              </Button>
            </Form>
          </Formik>
          <p className=" text-center mt-2 text-[20px] flex items-center gap-2">
            Ro‘yxatdan o‘tganmisiz?
            <span
              onClick={() => navigate("/signin")}
              className=" text-sky-500 hover:text-sky-700 duration-300 border-b border-sky-300 font-medium cursor-pointer"
            >
              Tizimga kirish
            </span>
          </p>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
}

export default Index;
