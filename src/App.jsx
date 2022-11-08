import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Home from './views/Home';
import Sushi from './views/Sushi';

function App() {
  // const [sushi, setSushi] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:3000/all-sushi")
  //     .then((res) => res.json())
  //     .then((data) => setSushi(data));
  // }, []);

  return (
    <main className="container mx-auto w-[1200px]">
      <Header />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/sushi" exact element={<Sushi />} />
      </Routes>
    </main>
  );
}

export default App;
