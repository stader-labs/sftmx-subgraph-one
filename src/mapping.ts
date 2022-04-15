import { BigInt } from "@graphprotocol/graph-ts"
import {
  FTMStaking,
  AdminChanged,
  BeaconUpgraded,
  LogDepositLimitUpdated,
  LogDeposited,
  LogEpochDurationSet,
  LogLocked,
  LogMaintenancePausedUpdated,
  LogUndelegatePausedUpdated,
  LogUndelegated,
  LogValidatorPickerSet,
  LogVaultHarvested,
  LogVaultOwnerUpdated,
  LogVaultWithdrawn,
  LogWithdrawPausedUpdated,
  LogWithdrawalDelaySet,
  LogWithdrawn,
  OwnershipTransferred,
  Upgraded
} from "../generated/FTMStaking/FTMStaking"
import { ExampleEntity } from "../generated/schema"

export function handleAdminChanged(event: AdminChanged): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.previousAdmin = event.params.previousAdmin
  entity.newAdmin = event.params.newAdmin

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.DECIMAL_UNIT(...)
  // - contract.FTMX(...)
  // - contract.MAX_LOCKUP_DURATION(...)
  // - contract.SFC(...)
  // - contract.UNLOCKED_REWARD_RATIO(...)
  // - contract.allWithdrawalRequests(...)
  // - contract.calculatePenalty(...)
  // - contract.claimRewards(...)
  // - contract.currentVaultCount(...)
  // - contract.currentVaultPtr(...)
  // - contract.epochDuration(...)
  // - contract.ftmPendingWithdrawal(...)
  // - contract.getExchangeRate(...)
  // - contract.getFTMxAmountForFTM(...)
  // - contract.getMaturedVault(...)
  // - contract.getMaturedVaultLength(...)
  // - contract.getPoolBalance(...)
  // - contract.getVault(...)
  // - contract.getWithdrawalInfo(...)
  // - contract.lastKnownEpoch(...)
  // - contract.maintenancePaused(...)
  // - contract.maxVaultCount(...)
  // - contract.nextEligibleTimestamp(...)
  // - contract.owner(...)
  // - contract.pickVaultsToUndelegate(...)
  // - contract.protocolFeeBIPS(...)
  // - contract.proxiableUUID(...)
  // - contract.totalFTMWorth(...)
  // - contract.treasury(...)
  // - contract.undelegatePaused(...)
  // - contract.validatorPicker(...)
  // - contract.withdrawPaused(...)
  // - contract.withdrawalDelay(...)
}

export function handleBeaconUpgraded(event: BeaconUpgraded): void {}

export function handleLogDepositLimitUpdated(
  event: LogDepositLimitUpdated
): void {}

export function handleLogDeposited(event: LogDeposited): void {}

export function handleLogEpochDurationSet(event: LogEpochDurationSet): void {}

export function handleLogLocked(event: LogLocked): void {}

export function handleLogMaintenancePausedUpdated(
  event: LogMaintenancePausedUpdated
): void {}

export function handleLogUndelegatePausedUpdated(
  event: LogUndelegatePausedUpdated
): void {}

export function handleLogUndelegated(event: LogUndelegated): void {}

export function handleLogValidatorPickerSet(
  event: LogValidatorPickerSet
): void {}

export function handleLogVaultHarvested(event: LogVaultHarvested): void {}

export function handleLogVaultOwnerUpdated(event: LogVaultOwnerUpdated): void {}

export function handleLogVaultWithdrawn(event: LogVaultWithdrawn): void {}

export function handleLogWithdrawPausedUpdated(
  event: LogWithdrawPausedUpdated
): void {}

export function handleLogWithdrawalDelaySet(
  event: LogWithdrawalDelaySet
): void {}

export function handleLogWithdrawn(event: LogWithdrawn): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleUpgraded(event: Upgraded): void {}
