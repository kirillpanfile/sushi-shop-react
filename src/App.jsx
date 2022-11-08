import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./views/Home";
import Sushi from "./views/Sushi";

function App() {
  return (
    <main className="container mx-auto max-w-[1200px] px-4">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/sushi" exact element={<Sushi />} />
      </Routes>
    </main>
  );
}

export default App;
