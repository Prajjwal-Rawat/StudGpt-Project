import { Navigate } from "react-router-dom";



function ProtectedRoute({isLoggedIn}){
  if(!isLoggedIn){
    return <Navigate to='/login'/>
  }else{
    return <Navigate to='/dashboard' />
  }
}

export default ProtectedRoute;