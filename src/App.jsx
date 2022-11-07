import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import Sushi from "./views/Sushi";

function App() {
  // const [sushi, setSushi] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:3000/all-sushi")
  //     .then((res) => res.json())
  //     .then((data) => setSushi(data));
  // }, []);

  return (
    <main>
      <Link className="text-blue-500 mr-4" to="/">
        Home
      </Link>
      <Link className="text-blue-500 mr-4" to="sushi">
        Sushi
      </Link>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/sushi" exact element={<Sushi />} />
      </Routes>
    </main>
  );
}

export default App;
