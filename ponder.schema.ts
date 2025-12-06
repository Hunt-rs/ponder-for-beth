import { onchainTable } from "ponder";

export const burnEvent = onchainTable("burn_event", (t) => ({
  id: t.text().primaryKey(), // tx hash + log index for uniqueness
  from: t.hex().notNull(),
  amount: t.bigint().notNull(),
  transactionHash: t.hex().notNull(),
  blockNumber: t.bigint().notNull(),
  timestamp: t.bigint().notNull(),
}));

export const burnerAccount = onchainTable("burner_account", (t) => ({
  address: t.hex().primaryKey(),
  totalBurned: t.bigint().notNull(),
  burnCount: t.integer().notNull(),
}));
