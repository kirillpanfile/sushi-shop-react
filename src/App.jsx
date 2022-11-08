import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./views/Home";
import Sushi from "./views/Sushi";
import { useComputed, useOnMounted, useWatch, useOnUnmounted } from "./hooks";

function App() {
  const [count, setCount] = useState(0);
  const [sushi, setSushi] = useState([]);

  const sushiCount = useComputed(() => sushi.length, [sushi]);

  useOnMounted(() => {
    setTimeout(() => {
      console.log("mounted");
      fetch("http://localhost:3001/all-sushi")
        .then((res) => res.json())
        .then((data) => setSushi(data));
    }, 1000);
  });

  useWatch(count, (oldCount, newCount) => {
    console.log("oldCount", oldCount);
    console.log("newCount", newCount);
  });

  return (
    <main className="container mx-auto w-[1200px]">
      <Header />
      <div className="mt-24">
        Button clicked {count} times
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount(count + 1)}
        >
          Click me
        </button>
        {sushiCount}
      </div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/sushi" exact element={<Sushi />} />
      </Routes>
    </main>
  );
}

export default App;
