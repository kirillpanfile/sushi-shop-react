import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useComputed, useOnMounted, useWatch, useOnUnmounted } from './hooks';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './views/Home';
import Sushi from './views/Sushi';

function App() {
  const [count, setCount] = useState(0);
  const [sushi, setSushi] = useState([]);

  const sushiCount = useComputed(() => sushi.length, [sushi]);

  useOnMounted(() => {
    setTimeout(() => {
      console.log('mounted');
      fetch('http://localhost:3001/all-sushi')
        .then((res) => res.json())
        .then((data) => setSushi(data));
    }, 1000);
  });

  useWatch(count, (oldCount, newCount) => {
    console.log('oldCount', oldCount);
    console.log('newCount', newCount);
  });

  return (
    <main className="flex flex-col min-h-screen mx-auto">
      <Header />

      <div className="flex-auto w-[1200px] mx-auto">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/sushi" exact element={<Sushi />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
}

export default App;
