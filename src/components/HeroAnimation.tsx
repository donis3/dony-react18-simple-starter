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
				"Dony develops web apps.",
				3000, // wait 1s before replacing "Mice" with "Hamsters"
				"Dony develops backend servers.",
				3000,
				"Dony performs small devops",
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
