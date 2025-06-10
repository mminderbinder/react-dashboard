import {Outlet} from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="dashboard-container">
            <header>
                <h1>Dashboard App</h1>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}
export default DashboardLayout;