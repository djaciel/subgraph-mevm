import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt } from "@graphprotocol/graph-ts"
import { NumRetrieved } from "../generated/schema"
import { NumRetrieved as NumRetrievedEvent } from "../generated/SimpleStorage/SimpleStorage"
import { handleNumRetrieved } from "../src/simple-storage"
import { createNumRetrievedEvent } from "./simple-storage-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let num = BigInt.fromI32(234)
    let newNumRetrievedEvent = createNumRetrievedEvent(num)
    handleNumRetrieved(newNumRetrievedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("NumRetrieved created and stored", () => {
    assert.entityCount("NumRetrieved", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "NumRetrieved",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "num",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
