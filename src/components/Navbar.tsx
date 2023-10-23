import React, { useState } from "react";
import { FaBeer } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { cn } from "../lib/utils";
import useClickOutside from "../hooks/useClickOutside";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	//Listener for outside clicks for mobile menu. So we can close the menu if clicked outside the menu
	const ref = useClickOutside<HTMLDivElement>(() => setMenuOpen(false));

	return (
		<>
			{/* Background blur under navbar */}
			<div className="fixed left-0 top-0 z-10 h-14 w-full backdrop-blur-md"></div>
			{/* Navbar element */}
			<nav className="    fixed  left-0 top-0 z-20 h-14 w-full whitespace-nowrap bg-black bg-opacity-10 font-headline text-white shadow-md">
				<div className="container mx-auto flex    h-14  flex-row items-center justify-between px-2 py-4">
					{/* App Name */}
					<h1 className="flex-1  p-1 text-2xl font-bold">
						DonyReact
					</h1>
					{/* Desktop Menu Items */}
					<ul className="hidden min-w-[200px]  flex-shrink flex-wrap  gap-3 p-1 text-xl md:flex">
						<NavMenuItems />
					</ul>
					{/* Mobile menu toggle btn (Hidden if width >= md) */}
					<button type="button" className=" py-1 px-3 md:hidden">
						{menuOpen ? (
							<AiOutlineClose
								className="text-2xl"
								onClick={() => setMenuOpen(false)}
							/>
						) : (
							<AiOutlineMenu
								className="text-2xl"
								onClick={() => setMenuOpen(true)}
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
					<ul className="items-left flex flex-col gap-y-2 p-4">
						<NavMenuItems />
					</ul>
				</div>
			</nav>
		</>
	);
}

// TODO: Add target functionality

function NavMenuItem({
	children,
	target,
	active,
	className,
	...props
}: NavMenuItemProps) {
	return (
		<li
			className={cn(
				"flex items-center  gap-2 rounded-md bg-gray-700 bg-opacity-20 p-1 text-lg md:bg-transparent md:text-base",
				className,
				{
					"bg-blue-300": active,
				},
			)}
			{...props}
		>
			{children}
		</li>
	);
}

type NavMenuItemProps = {
	target?: string;
	active?: boolean;
} & React.ComponentProps<"li">;

function NavMenuItems() {
	return (
		<>
			<NavMenuItem>
				<FaBeer className="text-2xl text-blue-600" />
				Item 1
			</NavMenuItem>
			<NavMenuItem>
				<FaBeer className="text-2xl text-blue-600" />
				Item 2
			</NavMenuItem>
			<NavMenuItem>
				<FaBeer className="text-2xl text-blue-600" />
				Item 3
			</NavMenuItem>
		</>
	);
}
