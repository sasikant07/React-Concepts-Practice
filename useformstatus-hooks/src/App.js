import { useActionState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [user, submitAction, isPending] = useActionState(login, {
    data: null,
    error: null,
  });

  function login(prevState, formData) {
    const username = formData.get("username");
    const password = formData.get("password");

    console.log("User: ", username, password);
    try {
      const userData = {
        username,
        password,
      };

      if (username && password) {
        return { data: userData, error: null };
      }
    } catch (error) {
      if (!username || !password) {
        return { ...prevState, error: "Invalid Credentials" };
      }
    }
  }

  return (
    <div>
      <form action={submitAction}>
        <div>
          <label>Username:</label>
          <input type="text"  />
        </div>
        <div>
          <label>Password:</label>
          <input type="text"  />
        </div>
        <Button />
        {user?.data && (
          <p style={{ color: "green" }}>Logged in: {user?.data?.username}</p>
        )}
        {user?.error && (
          <p style={{ color: "red" }}>Logged in: {user?.error}</p>
        )}
      </form>
    </div>
  );
}

export default App;
