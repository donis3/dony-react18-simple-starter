import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import HeroAnimation from "./HeroAnimation";

export default function Hero() {
	return (
		<section className=" py-16 text-white dark:text-white">
			<img
				src={logo}
				className=" mx-auto aspect-auto h-24 max-w-screen-xl md:h-32"
				alt="An image of a therapist"
			/>
			<div className="mx-auto mt-10 max-w-screen-xl px-4  lg:flex lg:items-center">
				<div className="mx-auto max-w-3xl text-center">
					<h3 className="min-h-[2rem] font-headline text-lg opacity-40">
						<HeroAnimation repeat={Infinity} />
					</h3>
					<h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text pb-2 text-4xl font-extrabold text-transparent md:text-3xl">
						Dony React + Vite + Tailwind
					</h1>

					<p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed ">
						A simple starter repo for my personal projects. There is
						no router nor a state manager. It can be deployed to
						github pages. Runs on client side only. Not recommended
						if seo needed for marketing.
					</p>

					<div className="mt-8 flex flex-wrap justify-center gap-4">
						<Link
							to="contact"
							smooth
							className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-800 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
							href="#"
						>
							Contact Me
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
