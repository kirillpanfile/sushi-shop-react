import { useDispatch, useSelector } from "react-redux";
import {
	fetchCategories,
	REQUEST,
	REQUEST_FULFILLED,
	REQUEST_REJECTED,
} from "../../store/category";
import { useOnMounted, useComputed } from "../../hooks";
import CategoryCard from "./CategoryCard";
import Preloader from "../ui/Preloader";

export default function TheCategories() {
	const dispatch = useDispatch();

	useOnMounted(() => {
		dispatch(fetchCategories());
	});

	const { categories, status } = useSelector(state => state.categories);

	const validCategories = useComputed(() => {
		const newCategories = [];

		if (categories && Array.isArray(categories) && categories.length > 0) {
			const categoriesHelper = [];
			categories.forEach((category, index) => {
				if (index === 0) newCategories.push(category);
				else categoriesHelper.push(category);
			});
			newCategories.push(categoriesHelper);

			return newCategories;
		}

		return [];
	}, [categories]);

	return (
		<section className="container py-16">
			{status === REQUEST_FULFILLED && (
				<div className="flex flex-col md:grid grid-cols-2 gap-4 w-full xl:w-11/12">
					{validCategories.map((category, index) => {
						return index == 0 ? (
							<CategoryCard
								key={category.category_id}
								name={category.category_name}
								image={category.image}
								link={`/category/${category.category_id}`}
							/>
						) : (
							<div className="flex flex-col gap-4" key="1000">
								{category.map(category => (
									<CategoryCard
										key={category.category_id}
										name={category.category_name}
										image={category.image}
										link={`/category/${category.category_id}`}
									/>
								))}
							</div>
						);
					})}
				</div>
			)}
			{status === REQUEST && <Preloader />}
			{status === REQUEST_REJECTED && <div>error</div>}
		</section>
	);
}
