import { cn } from "../lib/utils";

type TSection = {
	className?: string;
	radial?: boolean;
} & React.PropsWithChildren;

export default function Section({
	children,
	radial = false,
	className,
}: TSection) {
	return (
		<section
			className={cn(
				"min-h-[200px] w-full from-gray-900 to-black",
				className,
				{
					"bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]":
						radial,
				},
			)}
		>
			<div className="container mx-auto h-full p-3">{children}</div>
		</section>
	);
}
