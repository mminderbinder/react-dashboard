import {Outlet} from "react-router-dom";
import './AuthLayout.css';

const AuthLayout = () => {
    return (
        <div className="auth-container">
            <header>
                <h1>React Dashboard</h1>
                <h2>MDEV-1005 Assignment 2</h2>
                <p>Shawn Perron</p>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};
export default AuthLayout;