import { useEffect, useRef } from "react";

/**
 * Listen for mouse events and call cb if mouse click was outside the referenced element.
 * Use generic T to specify the subject element type
 * @param cb callback function
 * @returns a useRef object. Assign it to the subject element using ref={ref}
 */
export default function useClickOutside<T>(cb?: () => void) {
	const ref = useRef<T>(null);

	/**
	 * Determine if the mouse event target was inside the ref.current html element.
	 * Call the callback (cb) function if target was outside the ref.
	 * @param e
	 * @returns
	 */
	const handleClickOutside = (e: MouseEvent) => {
		if (!cb || !ref.current) return;
		if (
			ref.current instanceof HTMLElement &&
			!ref.current.contains(e.target as Node)
		) {
			cb?.();
		}
	};

	//On mount, add event listener, on unmount remove event listener
	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);
	return ref;
}
