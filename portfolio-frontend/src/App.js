import React, { useEffect, useState } from "react";
import { api } from "./services/api";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    api
      .get("/")
      .then((res) => setMessage(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Portfolio con React y Node.js 🚀</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
