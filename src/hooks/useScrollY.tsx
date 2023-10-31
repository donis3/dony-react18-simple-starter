import { useEffect } from "react";

type NavHandler = (yPos: number, offset: number) => any;

/**
 * Run the handler function when window scroll Y position changes.
 *
 * @param handler A handler function. params ypos: number, offset: number
 * @param offset
 */
export default function useScrollY(handler: NavHandler, offset = 0) {
	useEffect(() => {
		//On component mount, check scroll location for initial state
		handler(window.scrollY, offset);

		//Create an event handler for scroll events
		const handleScroll = () => handler(window.scrollY, offset);

		//Add event listener on window object
		window.addEventListener("scroll", handleScroll);
		return () => {
			//Remove event listener on dismount
			window.removeEventListener("scroll", handleScroll);
		};
	}, []); //run on component mount
}
