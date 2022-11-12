import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useOnUnmounted } from "../../hooks";

const HeaderLink = ({ type, link, text, children, styles }) => {
	if (type === "top") {
		return (
			<li className={"flex gap-2 items-center justify-center font-black text-xl " + styles}>
				{children}
			</li>
		);
	}
	if (type === "bottom") {
		return (
			<li className="flex gap-2 items-center font-bold text-xl">
				<Link to={link}>{text}</Link>
			</li>
		);
	}
};

const topLinks = [
	{
		id: 1,
		children: (
			<>
				<i className="fa-regular fa-clock"></i>
				<span>11:00 - 23:00</span>
			</>
		),
	},
	{
		id: 2,
		children: (
			<>
				<i className="fa-regular fa-phone"></i>
				<span>0745 123 456</span>
			</>
		),
	},
	{
		id: 3,
		children: <i className="fa-regular fa-user"></i>,
	},
];

export default function Header() {
	// whern second nav is on top of window stick it to top
	const [sticky, setSticky] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 95) setSticky(true);
		else setSticky(false);
	};

	window.addEventListener("scroll", handleScroll);

	useOnUnmounted(() => {
		window.removeEventListener("scroll", handleScroll);
	});

	return (
		<div className="flex flex-col">
			<div
				className={
					"flex justify-between items-center py-6 container " +
					(sticky ? "mb-[60px]" : "")
				}
			>
				<Link to="/">
					<img src={logo} className="object-contain w-[150px]" alt="logo" />
				</Link>
				<ul className="list-none flex items-center gap-4">
					{topLinks.map(link => {
						if (link.id === topLinks.length) {
							return (
								<HeaderLink
									key={link.id}
									type="top"
									{...link}
									styles="rounded-full bg-black text-white p-2 w-8 h-8 "
								/>
							);
						}
						return <HeaderLink key={link.id} type="top" {...link} />;
					})}
				</ul>
			</div>
			<div
				className={
					"bg-gray-50 " + (sticky ? "fixed top-0 left-0 right-0 bg-white z-50" : "")
				}
			>
				<div className="container flex justify-between items-center py-4">
					<ul className="list-none flex gap-4">
						<HeaderLink type="bottom" link="/category/1" text="ROLLS" />
						<HeaderLink type="bottom" link="/category/2" text="SETURI" />
						<HeaderLink type="bottom" link="/category/3" text="WOK" />
						<HeaderLink type="bottom" link="/category/4" text="NIGIRI & GIULBAN" />
					</ul>
					<ul className="list-none flex gap-4">
						<HeaderLink type="bottom" link="/cart" text="Cart" />
					</ul>
				</div>
			</div>
		</div>
	);
}

// rounded-full bg-black text-white p-2 w-8 h-8
