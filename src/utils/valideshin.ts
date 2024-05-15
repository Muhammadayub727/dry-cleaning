import * as Yup from "yup";

  // Validation scheme Register for the input field type ------------------------------
  const schema = Yup.object().shape({
    email: Yup.string().email("Email invalit ").required("Email is required"),
    full_name: Yup.string()
      .min(5, "Username invalit ")
      .required("Username is required"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
        "Password must contain at least one uppercase and one lowercase letter"
      )
      .required("Password is required"),
    phone_number: Yup.string()
      .min(19, "Phone invalit ")
      .required("Phone is required"),
  });

  const schema2 = Yup.object().shape({
    code: Yup.string().min(6, "Code invalit").required("Code is required"),
  });
  //================================


   // Validation scheme Login  for the input field type ------------------------------
   const schemaLogin = Yup.object().shape({
    email: Yup.string().email("Email invalit ").required("Email is required"),
    password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,"Password must contain at least one uppercase and one lowercase letter").required("Password is required")
  });
  //==========================================


  //-------------Email Validation --------------------------------
  const email = Yup.object().shape({
    email: Yup.string().email("Email invalit ").required("Email is required"),
  });
  //==========================================



  //----------------- code and password validation  --------------------------------
  const codePassword = Yup.object().shape({
    code: Yup.string().min(6, "Code invalit").required("Code is required"),
    new_password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,"Password must contain at least one uppercase and one lowercase letter").required("Password is required"),
  });
  //==========================================
  export{ schema , schema2 , schemaLogin , email , codePassword  }