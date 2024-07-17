import {
  NumRetrieved as NumRetrievedEvent,
  NumSet as NumSetEvent
} from "../generated/SimpleStorage/SimpleStorage"
import { NumRetrieved, NumSet } from "../generated/schema"

export function handleNumRetrieved(event: NumRetrievedEvent): void {
  let entity = new NumRetrieved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.num = event.params.num

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNumSet(event: NumSetEvent): void {
  let entity = new NumSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.num = event.params.num

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
