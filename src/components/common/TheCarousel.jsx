import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

const slides = [
	{
		id: 1,
		title: "Sushi",
		image: "https://images.unsplash.com/photo-1540648639573-8c848de23f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80",
	},
	{
		id: 2,
		title: "Wok-uri",
		image: "https://images.unsplash.com/photo-1599314250681-8e05113e0e1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
	},
	{
		id: 3,
		title: "Seturi",
		image: "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
	},
];

export default function TheCarousel() {
	return (
		<div className="container overflow-hidden py-12">
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				modules={[Autoplay]}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				loop={true}
			>
				{slides.map(slide => (
					<SwiperSlide key={slide.id}>
						<div className="flex flex-col justify-end overflow-hidden cursor-pointer h-[320px] md:h-[420px]">
							<img
								src={slide.image}
								alt={slide.title}
								className="w-full h-full rounded-lg object-cover"
							/>
							<h1 className="mt-2 font-black absolute ml-0 text-white text-3xl p-4">
								{slide.title}
							</h1>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
