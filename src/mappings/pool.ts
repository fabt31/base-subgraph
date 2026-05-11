import { Swap } from "../generated/schema";
import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";

export function handleSwap(event: any): void {
  let swap = new Swap(event.transaction.hash.toHexString() + "#" + event.logIndex.toString());
  swap.pool = event.address.toHexString();
  swap.timestamp = event.block.timestamp;
  swap.sender = event.params.sender;
  swap.recipient = event.params.recipient;
  swap.amount0 = BigDecimal.fromString(event.params.amount0.toString()).div(BigDecimal.fromString("1e18"));
  swap.amount1 = BigDecimal.fromString(event.params.amount1.toString()).div(BigDecimal.fromString("1e18"));
  swap.amountUSD = BigDecimal.zero();
  swap.sqrtPriceX96 = event.params.sqrtPriceX96;
  swap.tick = BigInt.fromI32(event.params.tick);
  swap.save();
}
