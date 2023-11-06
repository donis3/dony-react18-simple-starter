import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="h-auto w-full bg-gray-800 bg-opacity-30 px-3 py-4 text-white ">
			<div className="container mx-auto flex h-full flex-col  gap-4 md:flex md:flex-row md:items-start  md:justify-between md:gap-8">
				<div className="flex  items-center justify-center font-bold  md:min-h-[40px] md:justify-start">
					<h3 className="font-headline text-xl md:text-2xl">
						DonyReact
					</h3>
				</div>
				<div className="flex-1 ">
					<ul className="flex flex-wrap items-center justify-center gap-4 text-xs md:min-h-[40px] md:justify-start md:text-sm ">
						<li className="block  ">
							<a
								href="#"
								className="text-gray-300 transition hover:opacity-75"
							>
								Terms & Conditions
							</a>
						</li>

						<li>
							<a
								href="#"
								className="text-gray-300 transition hover:opacity-75"
							>
								Privacy Policy
							</a>
						</li>
					</ul>
				</div>
				<div>
					<ul className="flex items-center justify-center gap-6 md:min-h-[40px] lg:justify-end">
						<li>
							<a
								href="/"
								rel="noreferrer"
								target="_blank"
								className="text-gray-700 transition hover:opacity-75"
							>
								<span className="sr-only">Instagram</span>

								<FaInstagram />
							</a>
						</li>

						<li>
							<a
								href="/"
								rel="noreferrer"
								target="_blank"
								className="text-gray-700 transition hover:opacity-75"
							>
								<span className="sr-only">Twitter</span>
								<FaTwitter />
							</a>
						</li>

						<li>
							<a
								href="https://github.com/donis3/dony-react18-simple-starter"
								rel="noreferrer"
								target="_blank"
								className="text-gray-300 transition hover:opacity-75"
							>
								<span className="sr-only">GitHub</span>

								<FaGithub />
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="container mx-auto  mt-3 flex flex-col items-center justify-between gap-1 pt-2 text-xs  opacity-50 md:flex-row md:border-t">
				<div>&copy;2023 DonyReact</div>
				<div>
					Built with <span className="text-red-700">&hearts;</span> by
					Deniz Özkan and hosted by GitHub Pages
				</div>
			</div>
		</footer>
	);
}
