import Button from "../ui/Button";
export default function TheRecomendedCard({ sushi }) {
	return (
		<div className="flex flex-col items-center justify-center">
			<img src={sushi.img} alt={sushi.name} className="w-full h-full rounded-lg" />
			<h1 className="mt-2 text-base font-medium">{sushi.name}</h1>
			<strong className="text-red-600">
				{sushi.price} {sushi.curr}
			</strong>
			<Button
				type="button"
				title="Add to cart"
				icon={<i className="fa-regular fa-cart-shopping"></i>}
				handleClick={() => console.log("add to cart")}
			/>
		</div>
	);
}
