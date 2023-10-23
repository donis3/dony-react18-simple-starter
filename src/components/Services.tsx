import Card from "./Card";

export default function Services() {
	return (
		<div className="flex flex-col justify-center gap-x-8 gap-y-12 py-4 md:flex-row md:flex-wrap">
			<Card />
			<Card />
			<Card />
		</div>
	);
}
