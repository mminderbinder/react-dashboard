export const processFirebaseErrorMessage = (error) => {
  if (!error) return "Authentication failed";

  switch (error.code) {
    case "auth/email-already-in-use":
      return "This email is already registered. Please login.";
    case "auth/invalid-credential":
      return "Invalid email or password. Please try again.";
    case "auth/user-not-found":
      return "No account found with this email address.";
    case "auth/wrong-password":
      return "Incorrect password. Please try again.";
    case "auth/invalid-email":
      return "Please enter a valid email address.";
    case "auth/weak-password":
      return "Password should be at least 6 characters long.";
    case "auth/too-many-requests":
      return "Too many failed attempts. Please try again later.";
    default:
      return error.message || "Authentication failed. Please try again.";
  }
};
