import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

import {
	FaCheck,
	FaPaperPlane,
	FaSpinner,
	FaTimes,
	FaCopy,
} from "react-icons/fa";

type EmailStatus = "loading" | "success" | "error" | undefined;

export default function ContactUs() {
	const [copyFeedback, setCopyFeedback] = useState("");
	const [emailStatus, setEmailStatus] = useState<EmailStatus>(undefined);
	const formRef = useRef<HTMLFormElement>(null);
	const msgmeat = ["adozkan87", "gmail.com"];

	/**
	 * Copy email address, show feedback message and remove after duration
	 */
	const handleCopy = () => {
		navigator.clipboard.writeText(msgmeat.join("@"));
		setCopyFeedback("Copied");
		setTimeout(() => {
			setCopyFeedback("");
		}, 1000);
	};

	/**
	 * When email status changes, remove the feedback after a duration
	 */
	useEffect(() => {
		if (!emailStatus) return;

		const timeoutId = setTimeout(() => {
			setEmailStatus(undefined);
		}, 5000);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [emailStatus]);

	/**
	 * Handle form submit event using emailJS
	 * @param e
	 */
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (formRef.current instanceof HTMLFormElement) {
			setEmailStatus("loading");
			emailjs
				.sendForm(
					import.meta.env.VITE_EMAILJS_SERVICE_ID,
					import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
					formRef.current,
					import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
				)
				.then(
					(result) => {
						console.log(result.text);
						setEmailStatus("success");
					},
					(error) => {
						setEmailStatus("error");
						console.log(error.text);
					},
				);
		}
	};
	return (
		<div className="mx-auto  w-full rounded-lg bg-white bg-opacity-50 p-4 dark:bg-black dark:bg-opacity-80 md:max-w-2xl">
			<h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
				Contact Me
			</h2>
			<p className="mb-8 text-center font-light text-gray-800 dark:text-gray-300 sm:text-xl lg:mb-16">
				Please feel free to send me a message using the form below. You
				may also directly contact me{" "}
				<span className="font-normal">{msgmeat.join("@")}</span>
				<button
					type="button"
					className="px-1 text-sm opacity-50 hover:opacity-100"
					onClick={handleCopy}
				>
					<FaCopy className="inline-block text-sm" />{" "}
					<span className="text-green-600">{copyFeedback}</span>
				</button>
			</p>
			<form
				ref={formRef}
				className="flex flex-col space-y-8"
				onSubmit={handleSubmit}
			>
				<div>
					<label
						htmlFor="email"
						className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
					>
						Your email
					</label>
					<input
						type="email"
						id="user_email "
						name="user_email "
						className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
						placeholder="you@gmail.com"
						required
					/>
				</div>
				<div>
					<label
						htmlFor="subject"
						className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
					>
						Subject
					</label>
					<input
						type="text"
						id="subject"
						name="subject"
						className=" block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
						placeholder="Subject of your email"
						required
					/>
				</div>
				<div className="sm:col-span-2">
					<label
						htmlFor="message"
						className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
					>
						Your message
					</label>
					<textarea
						id="message"
						name="message"
						rows={6}
						className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
						required
					></textarea>
				</div>
				<div className="w-full flex items-center justify-center md:justify-start">
					<ReCAPTCHA
						sitekey={import.meta.env.VITE_RECAPTCHA_PUBLIC_KEY}
					/>
				</div>
				<div className="flex w-full flex-col items-center gap-4 md:flex-row">
					<button
						type="submit"
						className="flex  w-full items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 py-3 text-sm font-medium text-white focus:outline-none focus:ring-4 md:w-fit"
					>
						<FaPaperPlane /> Submit
					</button>
					<MailResponse status={emailStatus} />
				</div>
			</form>
		</div>
	);
}

function MailResponse({ status }: { status: EmailStatus }) {
	switch (status) {
		case "success":
			return (
				<p className="text-sm text-green-600">
					<FaCheck className="inline-block" /> Your message has been
					successfully sent!
				</p>
			);

		case "error":
			return (
				<p className="text-sm text-red-600">
					<FaTimes className="inline-block" /> An error ocurred while
					sending your message.
				</p>
			);

		case "loading":
			return (
				<p className="text-sm text-gray-500">
					<FaSpinner className="inline-block animate-spin" /> Sending
					Message
				</p>
			);

		default:
			return <></>;
	}
}
