import styles from "./Form.module.css";
import {Link, useNavigate} from "react-router-dom";
import {registerUser} from "../firebase/auth.js";
import {useState} from "react";
import {processFirebaseErrorMessage} from "../firebase/firebaseError.js";

const RegisterForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const onRegister = async (e) => {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        const {user, error: authError} = await registerUser(email, password);
        if (user) {
            navigate("/dashboard", {replace: true});
        } else {
            const errorMessage = processFirebaseErrorMessage(authError);
            setError(errorMessage || "Registration failed");
        }
    };

    return (
        <>
            <div className={styles.container}>
                <form className={styles.form} onSubmit={onRegister}>
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
                            value={email}
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
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
        </>
    );
};

export default RegisterForm;
