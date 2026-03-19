import { useState, useRef, useEffect } from 'react'
import { useAccount, useBalance, useChainId, useSwitchChain } from 'wagmi'
import { mainnet, sepolia, polygon, optimism, arbitrum } from 'wagmi/chains'
import { formatUnits } from 'viem'

const SUPPORTED_CHAINS = [mainnet, sepolia, polygon, optimism, arbitrum]

const CHAIN_COLORS: Record<number, string> = {
	[mainnet.id]: '#627eea',
	[sepolia.id]: '#cfb453',
	[polygon.id]: '#8247e5',
	[optimism.id]: '#ff0420',
	[arbitrum.id]: '#28a0f0',
}

function WalletInfo() {
	const { address } = useAccount()
	const chainId = useChainId()
	const { data: balance } = useBalance({ address })
	const { switchChain } = useSwitchChain()
	const [open, setOpen] = useState(false)
	const [copied, setCopied] = useState(false)
	const popoverRef = useRef<HTMLDivElement>(null)

	const currentChain = SUPPORTED_CHAINS.find((c) => c.id === chainId)
	const chainColor = CHAIN_COLORS[chainId] ?? '#65748b'

	// Close popover on outside click
	useEffect(() => {
		function handleClick(e: MouseEvent) {
			if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
				setOpen(false)
			}
		}
		if (open) {
			document.addEventListener('mousedown', handleClick)
		}
		return () => document.removeEventListener('mousedown', handleClick)
	}, [open])

	if (!address) return null

	const truncated = `${address.slice(0, 6)}...${address.slice(-4)}`
	const formattedBalance = balance
		? `${Number(formatUnits(balance.value, balance.decimals)).toFixed(4)} ${balance.symbol}`
		: '—'

	const handleCopy = async () => {
		await navigator.clipboard.writeText(address)
		setCopied(true)
		setTimeout(() => setCopied(false), 1500)
	}

	return (
		<div ref={popoverRef} className="relative mb-4">
			{/* Collapsed view — always visible */}
			<button
				type="button"
				onClick={() => setOpen(!open)}
				className="flex w-full items-center gap-3 rounded-xl border border-[#dfe3ea] bg-white/80 px-3 py-2.5 text-left transition hover:bg-white"
			>
				{/* Network dot */}
				<span
					className="h-2.5 w-2.5 shrink-0 rounded-full"
					style={{ background: chainColor, boxShadow: `0 0 6px ${chainColor}60` }}
				/>

				<div className="flex-1 min-w-0">
					<p className="text-[12px] font-semibold text-[#2e3240] truncate">
						{formattedBalance}
					</p>
					<p className="text-[11px] text-[#79849a]">
						{currentChain?.name ?? 'Unknown'}
					</p>
				</div>

				{/* Chevron */}
				<svg
					viewBox="0 0 24 24"
					className={`h-4 w-4 shrink-0 text-[#79849a] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
				>
					<path d="M6 9l6 6 6-6" />
				</svg>
			</button>

			{/* Expanded popover */}
			{open && (
				<div
					className="absolute left-0 right-0 top-full z-50 mt-1.5 rounded-xl border border-[#dfe3ea] bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
					style={{ animation: 'walletPopIn 0.15s ease-out' }}
				>
					{/* Address + Copy */}
					<div className="mb-3">
						<p className="mb-1 text-[11px] font-medium uppercase tracking-wide text-[#79849a]">
							Wallet Address
						</p>
						<button
							type="button"
							onClick={handleCopy}
							className="flex w-full items-center gap-2 rounded-lg bg-[#f3f5f8] px-3 py-2 transition hover:bg-[#e8ecf1]"
						>
							<span className="flex-1 text-left text-[12px] font-mono font-medium text-[#2e3240] truncate">
								{truncated}
							</span>
							{copied ? (
								<svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 text-green-500" fill="none" stroke="currentColor" strokeWidth="2.5">
									<path d="M20 6L9 17l-5-5" />
								</svg>
							) : (
								<svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 text-[#79849a]" fill="none" stroke="currentColor" strokeWidth="2">
									<rect x="9" y="9" width="13" height="13" rx="2" />
									<path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
								</svg>
							)}
						</button>
					</div>

					{/* Balance */}
					<div className="mb-3">
						<p className="mb-1 text-[11px] font-medium uppercase tracking-wide text-[#79849a]">
							Balance
						</p>
						<p className="text-[14px] font-semibold text-[#2e3240]">
							{formattedBalance}
						</p>
					</div>

					{/* Network */}
					<div>
						<p className="mb-2 text-[11px] font-medium uppercase tracking-wide text-[#79849a]">
							Network
						</p>
						<div className="grid gap-1">
							{SUPPORTED_CHAINS.map((chain) => {
								const isActive = chain.id === chainId
								const color = CHAIN_COLORS[chain.id] ?? '#65748b'
								return (
									<button
										key={chain.id}
										type="button"
										onClick={() => {
											if (!isActive) switchChain({ chainId: chain.id })
										}}
										className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-[13px] font-medium transition ${
											isActive
												? 'bg-[#eef3fc] text-[#2e3240]'
												: 'text-[#65748b] hover:bg-[#f3f5f8]'
										}`}
									>
										<span
											className="h-2 w-2 shrink-0 rounded-full"
											style={{ background: color }}
										/>
										<span className="flex-1">{chain.name}</span>
										{isActive && (
											<svg viewBox="0 0 24 24" className="h-4 w-4 text-[#1457d2]" fill="none" stroke="currentColor" strokeWidth="2.5">
												<path d="M20 6L9 17l-5-5" />
											</svg>
										)}
									</button>
								)
							})}
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default WalletInfo
