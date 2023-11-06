import { useEffect, useRef, useState } from "react";
import { FaCircle, FaQuoteLeft, FaUserCircle } from "react-icons/fa";

export default function Testimonials() {
	const [testimonialIndex, setTestimonialIndex] = useState(0);

	const goToTestimonial = (targetIndex: number) => {
		setTestimonialIndex((currentIndex) => {
			if (targetIndex > testimonialData.length - 1) {
				return currentIndex;
			}
			return targetIndex;
		});
	};

	//Get index numbers as an array
	const pagination = Object.keys(testimonialData).map((x) => parseInt(x));

	return (
		<div className="container mx-auto  flex  flex-col justify-center gap-x-8 gap-y-12  p-4 md:flex-row md:flex-wrap">
			<Testimonial testimonialIndex={testimonialIndex} />

			{pagination.length > 0 && (
				<div className="flex w-full items-center justify-center gap-2  ">
					{pagination.map((itemIndex) => (
						<button
							type="button"
							aria-label={`Testimonial ${itemIndex + 1}`}
							className="p-1"
							key={"testimonial-" + itemIndex}
							onClick={() => goToTestimonial(itemIndex)}
						>
							<FaCircle
								className={
									itemIndex === testimonialIndex
										? "text-white"
										: "text-gray-700"
								}
							/>
						</button>
					))}
				</div>
			)}
		</div>
	);
}

function Testimonial({ testimonialIndex = 0 }: { testimonialIndex: number }) {
	const ref = useRef<HTMLDivElement>(null);

	// I wanted to implement a rudimentary animation system for opacity transitions to work when state changes.
	useEffect(() => {
		if (!ref.current) return;
		ref.current.style.opacity = "0";

		const timeoutID = setTimeout(() => {
			if (!ref.current) return;
			ref.current.style.opacity = "1";
		}, 300);

		return () => {
			clearTimeout(timeoutID);
		};
	}, [testimonialIndex]);

	const data = testimonialData[testimonialIndex] || null;

	if (!data) {
		return (
			<p className="rounded-md bg-slate-100 p-3">
				Unable to load testimonial
			</p>
		);
	}
	return (
		<figure
			ref={ref}
			style={{ opacity: 0 }}
			className=" flex w-full flex-col items-center rounded-lg border border-gray-200 bg-white p-4 shadow transition-all duration-300 ease-in-out dark:border-gray-700 dark:bg-gray-800 md:max-w-lg"
		>
			<FaQuoteLeft className="text-4xl text-slate-400" />
			<blockquote className="py-4">
				<p className="text-center text-lg font-medium text-gray-900 dark:text-white md:text-xl">
					{data.text}
				</p>
			</blockquote>
			<figcaption className="mt-6 flex items-center justify-center space-x-3">
				<FaUserCircle className="text-2xl text-slate-400" />
				<div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
					<div className="pr-3 font-medium text-gray-900 dark:text-white">
						{data.author}
					</div>
					<div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
						{data.authorTitle}
					</div>
				</div>
			</figcaption>
		</figure>
	);
}

const testimonialData = [
	{
		id: 1,
		author: "Deniz Özkan",
		authorTitle: "CTO at Donis3.com",
		text: "Aliqua reprehenderit ad irure voluptate officia eu laboris elit. Esse esse voluptate elit eu tempor Lorem ea et deserunt. Consequat voluptate reprehenderit enim aliquip proident irure aute. Duis irure deserunt laboris tempor qui velit cillum quis irure ullamco aliquip. Irure esse duis dolore cillum nisi laboris labore deserunt duis anim laboris qui.",
	},
	{
		id: 2,
		author: "Abidin Deniz",
		authorTitle: "CTO at abidin.com",
		text: "Aliqua reprehenderit ad irure voluptate officia eu laboris elit. Esse esse voluptate elit eu tempor Lorem ea et deserunt. Consequat voluptate reprehenderit enim aliquip proident irure aute. Duis irure deserunt laboris tempor qui velit cillum quis irure ullamco aliquip. Irure esse duis dolore cillum nisi laboris labore deserunt duis anim laboris qui.",
	},
	{
		id: 3,
		author: "Abidin Özkan",
		authorTitle: "CTO at ozkan.com",
		text: "Aliqua reprehenderit ad irure voluptate officia eu laboris elit. Esse esse voluptate elit eu tempor Lorem ea et deserunt. Consequat voluptate reprehenderit enim aliquip proident irure aute. Duis irure deserunt laboris tempor qui velit cillum quis irure ullamco aliquip. Irure esse duis dolore cillum nisi laboris labore deserunt duis anim laboris qui.",
	},
];
