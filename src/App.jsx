import './App.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomePage from './components/HomePage';

function App() {

  return (
    <div>
      <HomePage />
      <ToastContainer autoClose={2500} theme="dark" newestOnTop={true} />
    </div>
  )
}

export default App
