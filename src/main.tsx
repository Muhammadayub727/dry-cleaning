
import ReactDOM from 'react-dom/client'
import Router from "./router/router.tsx"
import 'react-toastify/dist/ReactToastify.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
   <>
    <Router />
   </>
  // </React.StrictMode>,
)
