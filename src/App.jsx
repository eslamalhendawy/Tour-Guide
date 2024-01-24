import './App.css'
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <div>
      
      <ToastContainer autoClose={2500} theme="dark" newestOnTop={true} />
    </div>
  )
}

export default App
