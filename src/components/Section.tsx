import { cn } from "../lib/utils";
import { Element } from "react-scroll";

type TSection = {
	className?: string;
	radial?: boolean;
	name: string;
	fullHeight?: boolean;
} & React.PropsWithChildren;

export default function Section({
	children,
	radial = false,
	name,
	fullHeight = true,
	className,
}: TSection) {
	return (
		<Element
			className={cn(
				" w-full from-gray-900 to-black dark:from-gray-900 dark:to-black",
				className,
				{
					"bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]":
						radial,
				},
				{ "min-h-[calc(100vh-3.5rem)]": fullHeight },
			)}
			name={name}
		>
			{children}
		</Element>
	);
}
