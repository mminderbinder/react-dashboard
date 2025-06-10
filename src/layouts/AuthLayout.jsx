import {Link} from "react-router-dom";


const AuthLayout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default AuthLayout;