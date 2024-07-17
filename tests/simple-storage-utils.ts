import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import { NumRetrieved, NumSet } from "../generated/SimpleStorage/SimpleStorage"

export function createNumRetrievedEvent(num: BigInt): NumRetrieved {
  let numRetrievedEvent = changetype<NumRetrieved>(newMockEvent())

  numRetrievedEvent.parameters = new Array()

  numRetrievedEvent.parameters.push(
    new ethereum.EventParam("num", ethereum.Value.fromUnsignedBigInt(num))
  )

  return numRetrievedEvent
}

export function createNumSetEvent(num: BigInt): NumSet {
  let numSetEvent = changetype<NumSet>(newMockEvent())

  numSetEvent.parameters = new Array()

  numSetEvent.parameters.push(
    new ethereum.EventParam("num", ethereum.Value.fromUnsignedBigInt(num))
  )

  return numSetEvent
}
