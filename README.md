# base-subgraph

> The Graph Subgraph Templates for Base L2

Ready-to-deploy subgraph templates for indexing Base L2 data. Covers Uniswap v3, Aerodrome, ERC20 transfers, NFT mints, and custom smart contracts.

## Available Subgraphs
| Template | Description |
|----------|-------------|
| `uniswap-v3` | Pools, swaps, positions on Base |
| `aerodrome` | Aerodrome pools and votes |
| `erc20-tracker` | Token transfers and balances |
| `nft-activity` | Mints, transfers, sales |
| `custom-events` | Generic event indexer |

## Installation
```bash
git clone https://github.com/fabt31/base-subgraph
cd base-subgraph
npm install -g @graphprotocol/graph-cli
npm install
```

## Deploy
```bash
# Authenticate
graph auth --studio YOUR_DEPLOY_KEY

# Deploy Uniswap v3 subgraph on Base
cd templates/uniswap-v3
graph codegen && graph build
graph deploy --studio base-uniswap-v3
```

## Query Example
```graphql
{
  pools(first: 10, orderBy: totalValueLockedUSD, orderDirection: desc) {
    id
    token0 { symbol }
    token1 { symbol }
    totalValueLockedUSD
    volumeUSD
  }
}
```

## License
MIT