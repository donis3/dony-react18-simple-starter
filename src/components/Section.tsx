import { cn } from "../lib/utils";
import { Element } from "react-scroll";

type TSection = {
	className?: string;
	radial?: boolean;
	name: string;
} & React.PropsWithChildren;

export default function Section({
	children,
	radial = false,
	name,
	className,
}: TSection) {
	return (
		<Element
			className={cn(
				"min-h-[calc(100vh-3.5rem)] w-full from-gray-900 to-black dark:from-gray-900 dark:to-black",
				className,
				{
					"bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]":
						radial,
				},
			)}
			name={name}
		>
			<div className="container mx-auto h-full p-3">{children}</div>
		</Element>
	);
}
