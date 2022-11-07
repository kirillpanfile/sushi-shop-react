import { useState, useEffect } from "react";

function App() {
  const [sushi, setSushi] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/all-sushi")
      .then((res) => res.json())
      .then((data) => setSushi(data));
  }, []);

  return (
    <div className="App">
      <pre>{JSON.stringify(sushi, null, 2)}</pre>
    </div>
  );
}

export default App;
