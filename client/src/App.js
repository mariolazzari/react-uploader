import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const test = async () => {
    try {
      const { data } = await axios.get("/upload");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    test();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src="/uploads/senna.jpg" className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
