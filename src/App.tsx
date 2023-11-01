import Footer from "./components/Footer";
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
					Testimonials and stuff!
				</Section>
				<Section
					name="contact"
					className="bg-gradient-to-br from-gray-300 to-teal-100 dark:from-gray-800 dark:to-teal-800"
				>
					Contact Me!
				</Section>
			</main>

			<Footer />
		</div>
	);
}
