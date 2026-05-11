import { BigDecimal, BigInt, Address } from "@graphprotocol/graph-ts";

export const ZERO_BD = BigDecimal.zero();
export const ONE_BD = BigDecimal.fromString("1");
export const BI_18 = BigInt.fromI32(18);

export function exponentToBigDecimal(decimals: BigInt): BigDecimal {
  let bd = ONE_BD;
  for (let i = BigInt.zero(); i.lt(decimals); i = i.plus(BigInt.fromI32(1))) {
    bd = bd.times(BigDecimal.fromString("10"));
  }
  return bd;
}

export function safeDiv(a: BigDecimal, b: BigDecimal): BigDecimal {
  return b.equals(ZERO_BD) ? ZERO_BD : a.div(b);
}

export function isNullEthValue(value: string): boolean {
  return value == "0x0000000000000000000000000000000000000000000000000000000000000001";
}
