import { Route, Routes, useSearchParams } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from './pages/Home';
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";




function App() {
    
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen h-screen bg-slate-900 text-white flex flex-col">

      <NavBar isLoggedIn ={isLoggedIn} setIsLoggedIn ={setIsLoggedIn} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login setIsLoggedIn ={setIsLoggedIn}/>} />
        <Route path="/signUp" element={<SignUp  setIsLoggedIn ={setIsLoggedIn}/>} />
        <Route path="/dashboard" element={
        <ProtectedRoute isLoggedIn={isLoggedIn}>
          <Dashboard/>
        </ProtectedRoute>} />
      </Routes>
        

    </div>
  )
}

export default App
