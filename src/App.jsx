import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./views/Home";
import Sushi from "./views/Sushi";

function App() {
	return (
		<main className="flex flex-col flex-auto  mx-auto">
			<Header />
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/sushi" exact element={<Sushi />} />
			</Routes>
			<Footer />
		</main>
	);
}

export default App;
