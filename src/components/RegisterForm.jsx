import styles from './Form.module.css';
import {Link} from "react-router-dom";

const RegisterForm = () => {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="username"
                        id="username"
                        name="username"
                        placeholder="Username"
                        autoComplete="username"
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        autoComplete="email"
                        required
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
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Confirm Password</label>
                    <input
                        type="password"
                        id="confirm-password"
                        name="confirm-password"
                        placeholder="Confirm Password"
                        autoComplete="current-password"
                        required
                    />
                </div>
                <button type="submit" className={styles.submitButton}>
                    Register
                </button>
                <p className={styles.registerLink}>
                    Already registered? <Link to="/auth/login">Login</Link>
                </p>
            </form>
        </div>
    );
}

export default RegisterForm;