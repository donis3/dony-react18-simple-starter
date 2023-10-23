import logo from "../assets/logo.png";
import HeroAnimation from "./HeroAnimation";

export default function Hero() {
	return (
		<section className=" py-16 text-white">
			<img
				src={logo}
				className=" mx-auto aspect-auto h-24 max-w-screen-xl md:h-32"
				alt="An image of a therapist"
			/>
			<div className="mx-auto mt-10 max-w-screen-xl px-4  lg:flex lg:items-center">
				<div className="mx-auto max-w-3xl text-center">
					<h3 className="font-headline text-lg opacity-40 min-h-[2rem]">
						<HeroAnimation repeat={Infinity} />
					</h3>
					<h1 className="pb-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
						Dony Training React Project
					</h1>

					<p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed ">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Harum quidem laborum iusto facere explicabo repellat.
						Aperiam tempore perferendis, beatae odio, eveniet rerum
						optio, accusamus vero enim earum voluptate atque. Fuga?
					</p>

					<div className="mt-8 flex flex-wrap justify-center gap-4">
						<a
							className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
							href="/get-started"
						>
							Contact!
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
