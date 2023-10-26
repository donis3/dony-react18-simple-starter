import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Services from "./components/Services";

// Main Layout for the app defined here.
export default function App() {
	return (
		<div className="flex min-h-screen w-full flex-col justify-between pt-14 ">
			<Navbar />
			{/* Flex-1 so main content area fills the screen */}
			<main className="h-full w-full flex-1 ">
				<Section radial name="home">
					<Hero />
				</Section>
				<Section
					name="services"
					className="bg-gradient-to-br from-gray-300 to-teal-100 dark:from-gray-800 dark:to-teal-800"
				>
					<Services />
				</Section>
				<Section name="testimonials" radial className="text-white">
					Testimonials
				</Section>
				<Section
					name="contact"
					className="bg-gradient-to-br from-gray-300 to-teal-100 dark:from-gray-800 dark:to-teal-800"
				>
					Contact Me!
				</Section>
			</main>
			<footer className="h-auto w-full bg-black bg-opacity-30 ">
				<div className="container mx-auto flex h-full flex-col gap-3 p-3 text-white md:flex md:flex-row md:items-start md:justify-between md:gap-10">
					<div>&copy;2023 Donis!</div>
					<div className="flex-1 ">Footer-mid</div>
					<div>Footer-Right</div>
				</div>
			</footer>
		</div>
	);
}
