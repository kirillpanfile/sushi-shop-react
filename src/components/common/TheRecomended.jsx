import { useOnMounted, useComputed } from "../../hooks";
import TheRecomendedCard from "./TheRecomendedCard";
import { fetchRecommendedProducts } from "../../store/products";
import { useDispatch, useSelector } from "react-redux";

export default function TheRecomended() {
	const recomendedProducts = useSelector(state => state.products.recomendedProducts);
	const dispatch = useDispatch();

	const sushi = useComputed(() => recomendedProducts);

	useOnMounted(() => {
		dispatch(fetchRecommendedProducts());
	});

	return (
		<section className="flex flex-col items-center justify-center bg-gray-100 py-12 ">
			<div className="container">
				<h1 className="mr-auto font-bold text-lg">Produse recomandate</h1>
				<div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 mt-4">
					{sushi &&
						Array.isArray(sushi) &&
						sushi.length > 0 &&
						sushi.map(sushi => {
							return <TheRecomendedCard key={sushi.id} sushi={sushi} />;
						})}
				</div>
			</div>
		</section>
	);
}
