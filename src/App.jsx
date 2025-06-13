import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<AuthLayout/>}>
                    <Route index element={<Login/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="register" element={<Register/>}/>
                </Route>
                <Route path="/dashboard" element={
                    <ProtectedRoute>
                        <DashboardLayout/>
                    </ProtectedRoute>
                }>
                    <Route index element={<Dashboard/>}/>
                </Route>

                <Route path="/" element={<Navigate to="/auth" replace/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;