import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";

import App from "../App";
import  {SignIn,SiginUp, Error} from "@model";
import {ResponsiveDrawer} from "@layut";
import {Asosiy , Buyurtmalar , SMSMarketing , Mijozlar , Xizmatlar ,Sozlamalar} from "@pages"

const index = ()=>{
    const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<App />}>
            <Route index element={<SiginUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/main/*" element={<ResponsiveDrawer />} >
                <Route index element={<Asosiy />} />
                <Route path="buyurtmalar" element={<Buyurtmalar />} />
                <Route path="sozlamalar" element={<Sozlamalar />} />
                <Route path="xizmatlar" element={<Xizmatlar />} />
                <Route path="mijozlar" element={<Mijozlar />} />
                <Route path="sms-marketing" element={<SMSMarketing />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Route>
        )
      );
      return <RouterProvider router={router} />;
}

export default index;