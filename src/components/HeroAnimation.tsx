import { TypeAnimation } from "react-type-animation";

type HeroAnimationProps = {
	repeat?: number;
} & React.ComponentProps<"span">;

export default function HeroAnimation({
	repeat = Infinity,
}: HeroAnimationProps) {
	return (
		<TypeAnimation
			sequence={[
				// Same substring at the start will only be typed out once, initially
				"A starter template for react projects",
				3000, // wait 1s before replacing "Mice" with "Hamsters"
				"This project is for client side apps!",
				3000,
				"For seo optimized projects, use Next.js",
				3000,
			]}
			preRenderFirstString={false}
			cursor={false}
			wrapper="span"
			speed={40}
			deletionSpeed={60}
			omitDeletionAnimation
			repeat={repeat}
		/>
	);
}
