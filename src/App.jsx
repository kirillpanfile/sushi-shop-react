import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./views/Home";
import Sushi from "./views/Sushi";
import Category from "./views/Category";

function App() {
	return (
		<main className="flex flex-col flex-auto  mx-auto">
			<Header />
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/sushi" exact element={<Sushi />} />
				<Route path="/category/:id" element={<Category />} />
			</Routes>
			<Footer />
		</main>
	);
}

export default App;
