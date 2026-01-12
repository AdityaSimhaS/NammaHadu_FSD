import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Alert from "../components/alert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);
      setSuccess("Login successful 🎧");

      setTimeout(() => {
        navigate("/home");
      }, 1200);
    } catch (err) {
      setError("Invalid email or password ❌");
    }
  };

  return (
    <>
      <Alert message={success} type="success" />
      <Alert message={error} type="error" />

      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
