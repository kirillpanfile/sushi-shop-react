import TheRecomended from "../components/common/TheRecomended";
import TheCategories from "../components/common/TheCategories";
import TheCarousel from "../components/common/TheCarousel";

import { useOnMounted } from "../hooks";
export default function Home() {
	useOnMounted(() => {
		console.log("mounted");
	});

	return (
		<>
			<TheCarousel />
			<TheRecomended />
			<TheCategories />
		</>
	);
}
