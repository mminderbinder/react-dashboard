import styles from './Form.module.css';
import {Link, useNavigate} from 'react-router-dom';
import {loginUser} from '../firebase/auth.js';
import {useState} from "react";

const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onLogin = async (e) => {
        e.preventDefault();
        setError("");

        const {user, error: authError} = await loginUser(email, password);
        if (user) {
            navigate('/dashboard');
        } else {
            setError('Invalid email or password');
            console.log(authError);
        }
    }
    return (
        <>
            <div className={styles.container}>
                <form className={styles.form} onSubmit={onLogin}>
                    {error && <p className={styles.error}>{error}</p>}
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            autoComplete="email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            autoComplete="current-password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        Login
                    </button>
                    <p className={styles.registerLink}>
                        Don't have an account? <Link to="/auth/register">Register</Link>
                    </p>
                </form>
            </div>
        </>
    )
}


export default LoginForm;