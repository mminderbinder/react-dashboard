import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<AuthLayout/>}>
                    <Route index element={<Login/>}/> // Shows at "/auth"
                    <Route path="login" element={<Login/>}/> // Shows at "/auth/login"
                    <Route path="register" element={<Register/>}/> // Shows at "/auth/register"
                </Route>
                <Route path="/dashboard" element={<DashboardLayout/>}>
                    <Route index element={<Dashboard/>}/> // Shows at "/dashboard"
                </Route>
                <Route path="/" element={<Navigate to="/auth" replace/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App
