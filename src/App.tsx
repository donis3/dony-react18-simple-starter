import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

// Main Layout for the app defined here.
export default function App() {
	return (
		<div className="flex min-h-screen w-full flex-col justify-between pt-14 ">
			<Navbar />
			{/* Flex-1 so main content area fills the screen */}
			<main className="h-full w-full flex-1 ">
				<Section radial name="home" fullHeight={true}>
					<div className="container mx-auto  p-3 ">
						<Hero />
					</div>
				</Section>
				<Section
					name="services"
					className="bg-gradient-to-br from-gray-300 to-teal-100 dark:from-gray-800 dark:to-teal-800"
				>
					<div className="container mx-auto h-full min-h-[calc(100vh-3.5rem)] p-3 ">
						<Services />
					</div>
				</Section>
				<Section
					name="testimonials"
					radial={true}
					fullHeight={false}
					className="flex flex-col justify-center py-10 px-4"
				>
					<Testimonials />
				</Section>
				<Section
					fullHeight={true}
					name="contact"
					className="bg-gradient-to-br from-gray-300 to-teal-100 dark:from-gray-800 dark:to-teal-800 flex flex-col justify-center py-10 px-4"
				>
					
						<ContactUs />
					
				</Section>
			</main>

			<Footer />
		</div>
	);
}
