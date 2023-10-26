import img1 from "../assets/cards/card-1.jpg";

export default function Card() {
	return (
		<div className="w-full rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 md:max-w-xs">
			<div className="w-full overflow-hidden rounded-t-lg ">
				<a href="#services" className="">
					<img
						className="h-48 w-full object-cover md:h-32"
						src={img1}
						alt="Mental health illustration"
					/>
				</a>
			</div>
			<div className="p-5">
				<a href="#services">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						LorAmet sit commodo Lorem pariatur.
					</h5>
				</a>
				<p className="mb-3 text-lg font-normal text-gray-700 dark:text-gray-400">
					Fugiat ad nulla ad irure reprehenderit dolor duis consequat
					enim adipisicing quis officia ullamco laboris. Ut laboris
					deserunt fugiat magna minim.
				</p>
				<a
					href="#services"
					className="inline-flex items-center rounded-lg bg-rose-700 px-3 py-2 text-center text-lg font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Read more
				</a>
			</div>
		</div>
	);
}
