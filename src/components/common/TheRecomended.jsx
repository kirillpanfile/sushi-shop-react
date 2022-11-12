import { useDispatch, useSelector } from "react-redux";
import { useOnMounted, useComputed } from "../../hooks";
import TheRecomendedCard from "./TheRecomendedCard";
import {
	fetchRecommendedProducts,
	REQUEST_FULFILLED,
	REQUEST,
	REQUEST_REJECTED,
} from "../../store/products";
import Preloader from "../ui/Preloader";

export default function TheRecomended() {
	const { recomendedProducts, status } = useSelector(state => state.products);
	const dispatch = useDispatch();

	const sushi = useComputed(() => recomendedProducts);

	useOnMounted(() => {
		dispatch(fetchRecommendedProducts());
		console.log(status);
		console.log(recomendedProducts);
	});

	return (
		<section className="flex flex-col items-center justify-center bg-gray-100 py-12 ">
			{status === REQUEST_FULFILLED && (
				<div className="container">
					<h1 className="mr-auto font-bold text-xl">Produse recomandate</h1>
					<div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 mt-4">
						{sushi &&
							Array.isArray(sushi) &&
							sushi.length > 0 &&
							sushi.map(sushi => {
								return <TheRecomendedCard key={sushi.id} sushi={sushi} />;
							})}
					</div>
				</div>
			)}
			{status === REQUEST && <Preloader />}
			{status === REQUEST_REJECTED && <div>error</div>}
		</section>
	);
}
