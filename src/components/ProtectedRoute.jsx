import {getCurrentUser} from "../firebase/auth.js";
import {Navigate} from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const user = getCurrentUser();
    return user ? children : <Navigate to="/auth/login" replace/>
}

export default ProtectedRoute;