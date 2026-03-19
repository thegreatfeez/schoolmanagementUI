import { NavLink } from 'react-router-dom'

const footerLinks = {
	platform: [
		{ label: 'Overview', path: '/overview' },
		{ label: 'Student Registry', path: '/students' },
		{ label: 'Faculty Portal', path: '/faculty' },
		{ label: 'Claims & Billing', path: '/claims' },
	],
	support: [
		{ label: 'Knowledge Base', path: '#' },
		{ label: 'Documentation', path: '#' },
		{ label: 'Smart Contracts', path: '#' },
		{ label: 'API Reference', path: '#' },
	],
	legal: [
		{ label: 'Terms of Service', path: '#' },
		{ label: 'Privacy Policy', path: '#' },
		{ label: 'Token Policy', path: '#' },
	],
}

function Footer() {
	return (
		<>
			{/* CTA Section */}
			<section className="py-20" style={{ background: '#0b1d4f' }}>
				<div className="mx-auto max-w-[1280px] px-5 text-center lg:px-10">
					<h3 className="mx-auto max-w-[600px] text-[30px] font-semibold leading-[1.1] text-white md:text-[38px]">
						Ready to Transform Your <span className="font-semibold">Institution?</span>
					</h3>
					<p className="mx-auto mt-5 max-w-[500px] text-[16px] leading-[22px] text-neutral-300">
						With ExcelSchool, you're not just managing a school — you're building a transparent future for education on the blockchain.
					</p>
					<a
						href="/overview"
						className="mt-10 inline-flex rounded-lg bg-[#1457d2] px-10 py-4 text-[15px] font-semibold text-white shadow-[0_8px_24px_rgba(20,87,210,0.4)] transition hover:bg-[#2563eb]"
					>
						Get Started Today
					</a>
				</div>
			</section>

			{/* Footer */}
			<footer id="contact" className="border-t border-neutral-200 bg-[#e9eefc] text-[#555]">
				<div className="mx-auto max-w-[1280px] px-5 py-16 lg:px-10">
					<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
						{/* Brand */}
						<div>
							<NavLink to="/home" className="text-[24px] font-bold tracking-[-0.02em] text-[#161c25]">
								ExcelSchool
							</NavLink>
							<p className="mt-3 max-w-[280px] text-[14px] leading-[18px] font-light text-neutral-600">
								The decentralized academic management platform — empowering institutions worldwide with blockchain transparency and trust.
							</p>
							<div className="mt-5 flex items-center gap-4">
								{[
									{ label: 'Twitter', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
									{ label: 'GitHub', icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' },
									{ label: 'Discord', icon: 'M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 01.078-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.099.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.076.076 0 00-.041.107c.36.698.772 1.363 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z' },
								].map((social) => (
									<a
										key={social.label}
										href="#"
										className="grid h-9 w-9 place-items-center rounded-full bg-[#d8dfef] text-[#1457d2] transition hover:bg-[#1457d2] hover:text-white"
										aria-label={social.label}
									>
										<svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
											<path d={social.icon} />
										</svg>
									</a>
								))}
							</div>
						</div>

						{/* Platform */}
						<div>
							<h5 className="mb-4 text-[16px] font-semibold text-[#161c25]">Platform</h5>
							<ul className="space-y-2">
								{footerLinks.platform.map((link) => (
									<li key={link.label}>
										<NavLink to={link.path} className="text-[14px] text-neutral-500 transition hover:text-[#1457d2]">
											{link.label}
										</NavLink>
									</li>
								))}
							</ul>
						</div>

						{/* Support */}
						<div>
							<h5 className="mb-4 text-[16px] font-semibold text-[#161c25]">Support</h5>
							<ul className="space-y-2">
								{footerLinks.support.map((link) => (
									<li key={link.label}>
										<a href={link.path} className="text-[14px] text-neutral-500 transition hover:text-[#1457d2]">
											{link.label}
										</a>
									</li>
								))}
							</ul>
							<h5 className="mb-3 mt-6 text-[16px] font-semibold text-[#161c25]">Legal</h5>
							<ul className="space-y-2">
								{footerLinks.legal.map((link) => (
									<li key={link.label}>
										<a href={link.path} className="text-[14px] text-neutral-500 transition hover:text-[#1457d2]">
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</div>

						{/* Newsletter */}
						<div>
							<h5 className="mb-2 text-[16px] font-semibold text-[#1457d2]">Get updates from ExcelSchool</h5>
							<p className="mb-4 text-[13px] text-neutral-500">Subscribe to stay in the know</p>
							<form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
								<input
									type="email"
									placeholder="Email Address"
									className="flex-1 rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-[14px] outline-none focus:border-[#1457d2]"
								/>
								<button
									type="submit"
									className="rounded-lg bg-[#1457d2] px-5 py-2.5 text-[14px] font-semibold text-white transition hover:bg-[#0f3d9e]"
								>
									Subscribe
								</button>
							</form>
							<p className="mt-2 text-[11px] text-neutral-400">
								By subscribing, you accept our{' '}
								<a href="#" className="font-medium text-[#161c25] underline">Privacy Policy</a>
							</p>
						</div>
					</div>

					<div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-300 pt-6 sm:flex-row">
						<p className="text-[13px] text-neutral-500">
							© 2026 <span className="font-semibold text-[#1457d2]">ExcelSchool</span> — All rights reserved.
						</p>
						<p className="text-[13px] text-neutral-500">Built on Ethereum • Powered by Smart Contracts</p>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer
