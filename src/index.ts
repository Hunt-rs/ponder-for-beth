import { ponder } from "ponder:registry";
import { burnEvent, burnerAccount } from "ponder:schema";

ponder.on("Beth:Burned", async ({ event, context }) => {
    const eventId = `${event.transaction.hash}-${event.log.logIndex}`;

    // Insert individual burn event with transaction details
    await context.db.insert(burnEvent).values({
        id: eventId,
        from: event.args.from,
        amount: event.args.amount,
        transactionHash: event.transaction.hash,
        blockNumber: BigInt(event.block.number),
        timestamp: BigInt(event.block.timestamp),
    });

    // Update or insert burner account aggregates
    await context.db
        .insert(burnerAccount)
        .values({
            address: event.args.from,
            totalBurned: event.args.amount,
            burnCount: 1,
        })
        .onConflictDoUpdate((row) => ({
            totalBurned: row.totalBurned + event.args.amount,
            burnCount: row.burnCount + 1,
        }));
});
