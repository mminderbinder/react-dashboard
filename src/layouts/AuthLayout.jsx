import {Outlet} from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className="auth-container">
            <header>
                <h1>Dashboard App</h1>
                <p>Please sign in to continue</p>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};
export default AuthLayout;