import { useState } from "react";
import {
	FaCommentDots,
	FaEnvelope,
	FaHome,
	FaLayerGroup,
} from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { cn } from "../lib/utils";
import useClickOutside from "../hooks/useClickOutside";
import { Link, LinkProps } from "react-scroll";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => setMenuOpen(!menuOpen);
	//Listener for outside clicks for mobile menu. So we can close the menu if clicked outside the menu
	const ref = useClickOutside<HTMLDivElement>(() => setMenuOpen(false));

	return (
		<>
			{/* Background blur under navbar */}
			<div className="fixed left-0 top-0 z-10 h-14 w-full backdrop-blur-md"></div>
			{/* Navbar element */}
			<nav className="    fixed  left-0 top-0 z-20 h-14 w-full whitespace-nowrap bg-slate-800 bg-opacity-40 font-headline text-white shadow-md">
				<div className="container mx-auto flex    h-14  flex-row items-center justify-between px-2 py-4">
					{/* App Name */}
					<h1 className="flex-1   cursor-pointer text-2xl font-bold">
						<Link
							to="home"
							href="#"
							smooth
							offset={-56}
							className="rounded-lg  p-1 hover:bg-white/5"
							role="navigation"
						>
							DonyReact
						</Link>
					</h1>
					{/* Desktop Menu Items */}
					<nav className=" hidden  min-w-[200px] flex-shrink  flex-wrap gap-3 p-1 text-xl md:flex">
						<NavMenuItems />
					</nav>
					{/* Mobile menu toggle btn (Hidden if width >= md) */}
					<button type="button" className=" px-3 py-1 md:hidden">
						{menuOpen ? (
							<AiOutlineClose
								className="text-2xl"
								onClick={toggleMenu}
							/>
						) : (
							<AiOutlineMenu
								className="text-2xl"
								onClick={toggleMenu}
							/>
						)}
					</button>
				</div>
				{/* Mobile menu (Hidden if width >= md) */}
				<div
					ref={ref}
					className={cn(
						"fixed left-0 top-14 h-[calc(100%-56px)] w-0 min-w-0 overflow-hidden border-r   border-gray-900 bg-gray-950  transition-all duration-300 ease-out md:hidden",
						{ "w-3/5 min-w-[200px]": menuOpen },
					)}
				>
					{/* Mobile Menu Items */}

					<nav className="items-left  flex flex-col gap-y-2 p-4">
						<NavMenuItems />
					</nav>
				</div>
			</nav>
		</>
	);
}

type NavItemProps = {
	active?: boolean;
} & LinkProps;

function NavItem({ children, active, className, ...props }: NavItemProps) {
	const [isActive, setActive] = useState(false);
	return (
		<Link
			className={cn(
				"group relative flex items-center gap-1  rounded-md bg-gray-700 bg-opacity-20 px-2 py-1 text-lg font-normal hover:outline hover:outline-gray-500 md:bg-transparent md:text-base ",
				className,
				{
					"bg-blue-300 font-bold": isActive,
				},
			)}
			to={props.to}
			smooth="easeInQuad"
			href="#"
			spy
			onSetActive={() => {
				setActive(true);
			}}
			onSetInactive={() => {
				setActive(false);
			}}
			offset={-56} //navbar height in pixels
			duration={600}
		>
			{children}
			<div
				className={cn(
					"absolute bottom-0 left-0	 hidden h-1 w-full bg-gradient-to-r from-slate-50 to-slate-200 bg-[size:75%_75%] bg-[position:center] bg-no-repeat",
					{ " md:block": isActive },
				)}
			></div>
		</Link>
	);
}

function NavMenuItems() {
	return (
		<>
			<NavItem to="home">
				<FaHome className="text-xl text-current opacity-50  group-hover:opacity-100 " />
				Home
			</NavItem>
			<NavItem to="services">
				<FaLayerGroup className="text-xl text-current opacity-50  group-hover:opacity-100 " />
				Services
			</NavItem>
			<NavItem to="testimonials">
				<FaCommentDots className="text-xl text-current opacity-50  group-hover:opacity-100 " />
				Testimonials
			</NavItem>
			<NavItem to="contact">
				<FaEnvelope className="text-xl text-current opacity-50  group-hover:opacity-100 " />
				Contact
			</NavItem>
		</>
	);
}
