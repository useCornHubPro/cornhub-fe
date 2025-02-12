import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { http } from 'wagmi'
import {
  arbitrum,
  avalanche,
  base,
  blast,
  metis,
  mainnet,
  polygon,
  optimism,
  bscTestnet,
  sepolia,
  bsc,
} from 'wagmi/chains'

export const config = getDefaultConfig({
  appName: 'Deploy Token',
  projectId: '15787e2949e99efd12dc95c5e03cd127',
  chains: [
    // mainnet,
    bsc,
    base,
    arbitrum,
    polygon,
    optimism,
    avalanche,
    // {...metis,
    //   iconUrl:'https://assets.coingecko.com/coins/images/15595/standard/Metis_Black_Bg.png?'
    // },
    bscTestnet,
    sepolia,
  ],
  transports: {
    [mainnet.id]: http('https://mainnet.infura.io/v3/113f8fe63628446cb141f8e6618518ce'),
    [sepolia.id]: http('https://sepolia.infura.io/v3/113f8fe63628446cb141f8e6618518ce'),
    [polygon.id]: http('https://polygon-rpc.com'),
    [optimism.id]: http('https://optimism-rpc.publicnode.com'),
    [arbitrum.id]: http('https://arbitrum.drpc.org'),
    [base.id]: http('https://base-rpc.publicnode.com'),
    [bscTestnet.id]: http('https://bsc-testnet-rpc.publicnode.com'),
    // [blast.id]: http("https://blast-rpc.publicnode.com"),
    [bsc.id]: http('https://bsc-mainnet.infura.io/v3/113f8fe63628446cb141f8e6618518ce'),
    [metis.id]: http('https://andromeda.metis.io/?owner=1088'), // Metis Mainnet RPC
    // [mantle.id]: http("https://rpc.mantlenetwork.io/"), // Mantle Mainnet RPC
    // [cronos.id]: http("https://evm-cronos.crypto.org"),  // Cronos Mainnet RPC
    [avalanche.id]: http('https://avalanche.drpc.org'), // Avalanche Mainnet RPC
  },
})
