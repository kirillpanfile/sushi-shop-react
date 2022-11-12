import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../store/category";
import { useOnMounted, useComputed } from "../../hooks";
import CategoryCard from "./CategoryCard";

export default function TheCategories() {
	const dispatch = useDispatch();

	useOnMounted(() => {
		dispatch(fetchCategories());
	});

	const sushiCategroies = useSelector(state => state.categories.categories);

	const validCategories = useComputed(() => {
		const newCategories = [];

		if (sushiCategroies && Array.isArray(sushiCategroies) && sushiCategroies.length > 0) {
			const categoriesHelper = [];
			sushiCategroies.forEach((category, index) => {
				if (index === 0) newCategories.push(category);
				else categoriesHelper.push(category);
			});
			newCategories.push(categoriesHelper);

			return newCategories;
		}

		return [];
	}, [sushiCategroies]);

	return (
		<section className="container py-16">
			<div className="flex flex-col md:grid grid-cols-2 gap-4 w-full xl:w-11/12">
				{validCategories.map((category, index) => {
					return index == 0 ? (
						<CategoryCard
							key={category.category_id}
							name={category.category_name}
							image={category.image}
						/>
					) : (
						<div className="flex flex-col gap-4" key={category.category_id}>
							{category.map((category, index) => (
								<CategoryCard
									key={index + 10}
									name={category.category_name}
									image={category.image}
								/>
							))}
						</div>
					);
				})}
			</div>
		</section>
	);
}
