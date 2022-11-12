export default function CategoryCard({ name, image }) {
	return (
		<div className="flex flex-col justify-end overflow-hidden cursor-pointer">
			<img
				src={image}
				alt={name}
				className="w-full h-full rounded-lg object-cover hover:scale-[1.1] transition-all duration-300"
			/>
			<h1 className="mt-2 font-black absolute ml-0 text-white text-3xl p-4">{name}</h1>
		</div>
	);
}
