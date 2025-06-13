import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import {auth} from "./config.js";

export const loginUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        return {user: userCredential.user, error: null};
    } catch (e) {
        return {user: null, error: e};
    }
};

export const registerUser = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        return {user: userCredential.user, error: null};
    } catch (e) {
        return {user: null, error: e};
    }
};

export const logoutUser = async () => {
    try {
        await signOut(auth);
        return {success: true, error: null};
    } catch (e) {
        return {success: false, error: e};
    }
}

export const onAuthStateChange = (callback) => {
    return onAuthStateChanged(auth, callback);
}

export const getCurrentUser = () => {
    return auth.currentUser;
}
