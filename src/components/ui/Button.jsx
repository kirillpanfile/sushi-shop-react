export default function Button({ title, icon, handleClick, type = "button", disabled = false }) {
	return (
		<button
			type={type}
			onClick={handleClick}
			disabled={disabled}
			className="bg-red-500 rounded-md w-28 h-12 cursor-pointer relative py-3 flex items-center justify-center group overflow-hidden font-bold text-white"
		>
			<span className="w-full absolute top-1/2 -translate-y-1/2 group-hover:top-[-150%] transition-all duration-300">
				{title}
			</span>
			<span className="w-full absolute bottom-[-150%] translate-y-1/2 group-hover:bottom-1/2 transition-all duration-300">
				{icon}
			</span>
		</button>
	);
}
