import { useParams } from "react-router-dom";
import { useState } from "react";
import { useOnMounted } from "../hooks";
import { useSelector, useDispatch } from "react-redux";
import Preloader from "../components/ui/Preloader";
import {
	fetchCurrentCategory,
	REQUEST,
	REQUEST_FULFILLED,
	REQUEST_REJECTED,
} from "../store/category";
import Button from "../components/ui/Button";

export default function Category() {
	const { id } = useParams();

	const dispatch = useDispatch();
	const { currentCategory, status } = useSelector(state => state.categories);
	console.log(currentCategory);

	const validateCategory = () =>
		currentCategory && Array.isArray(currentCategory) && currentCategory.length > 0;

	useOnMounted(() => {
		dispatch(fetchCurrentCategory(id));
	});

	return (
		<div className="container py-8">
			{status === REQUEST_FULFILLED && (
				<div className="grid grid-cols-2 md:first-letter:grid-cols-3 lg:grid-cols-4 gap-4">
					{validateCategory &&
						currentCategory.map((product, index) => {
							return (
								<div key={index}>
									<img src={product.img} alt={product.name} />
									<div className="flex flex-col items-center gap-1 mt-2">
										<h1 className="text-xl">{product.name}</h1>
										<strong className="font-black text-red-500">
											{product.price} {product.curr}
										</strong>
										<Button
											title="ADAUGĂ ÎN COȘ"
											onClick={() => {
												console.log("click");
											}}
											icon={<i className="fas fa-shopping-cart"></i>}
										/>
									</div>
								</div>
							);
						})}
				</div>
			)}
			{status === REQUEST && <Preloader />}
			{status === REQUEST_REJECTED && <h1>Something went wrong</h1>}
		</div>
	);
}
