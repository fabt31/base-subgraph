import { PoolCreated } from "../generated/UniswapV3Factory/UniswapV3Factory";
import { Pool, Token } from "../generated/schema";
import { BigInt, BigDecimal } from "@graphprotocol/graph-ts";

export function handlePoolCreated(event: PoolCreated): void {
  let pool = new Pool(event.params.pool.toHexString());
  
  let token0 = Token.load(event.params.token0.toHexString());
  if (!token0) {
    token0 = new Token(event.params.token0.toHexString());
    token0.symbol = "UNKNOWN";
    token0.name = "Unknown Token";
    token0.decimals = BigInt.fromI32(18);
    token0.totalSupply = BigInt.zero();
    token0.volume = BigDecimal.zero();
    token0.volumeUSD = BigDecimal.zero();
    token0.txCount = BigInt.zero();
    token0.totalValueLocked = BigDecimal.zero();
    token0.totalValueLockedUSD = BigDecimal.zero();
    token0.derivedETH = BigDecimal.zero();
    token0.save();
  }

  pool.token0 = token0.id;
  pool.token1 = event.params.token1.toHexString();
  pool.feeTier = BigInt.fromI32(event.params.fee);
  pool.liquidity = BigInt.zero();
  pool.sqrtPrice = BigInt.zero();
  pool.tick = BigInt.zero();
  pool.totalValueLockedToken0 = BigDecimal.zero();
  pool.totalValueLockedToken1 = BigDecimal.zero();
  pool.totalValueLockedUSD = BigDecimal.zero();
  pool.volumeUSD = BigDecimal.zero();
  pool.txCount = BigInt.zero();
  pool.createdAtTimestamp = event.block.timestamp;
  pool.createdAtBlockNumber = event.block.number;
  pool.save();
}