import './App.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';

function App() {

  return (
    <div>
      <Header /> 
      <HomePage />
      <Footer />
      <ToastContainer autoClose={2500} theme="dark" newestOnTop={true} />
    </div>
  )
}

export default App
