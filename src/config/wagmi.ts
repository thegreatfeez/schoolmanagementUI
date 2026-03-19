import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { mainnet, sepolia, polygon, optimism, arbitrum } from 'wagmi/chains'

export const wagmiConfig = getDefaultConfig({
	appName: 'ExcelSchool',
	projectId: 'demo_excelschool_project', // Replace with your WalletConnect Cloud projectId
	chains: [mainnet, sepolia, polygon, optimism, arbitrum],
	ssr: false,
})
