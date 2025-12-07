## Introduction

- Indexer for BETH using [ponder](https://ponder.sh/)

## Setup

```bash
git clone https://github.com/Hunt-rs/ponder-for-beth
cd ponder-for-beth
npm install
cp .env.example .env.local
```

- Setup your Postgres database

- Then fill the `.env.local` file with your RPC (Infura / Alchemy) and URL to your Postgres database

- You can change the `DATABASE_SCHEMA` to your favorite one (default is `ponder_beth`)

## Run

```bash
npm run start
```

## Sample GraphQL Queries

- Query top 10 burners

```graphql
query GetBurnStats {
    burnerAccounts(
        orderBy: "totalBurned"
        orderDirection: "desc"
        limit: 10
    ) {
        items {
            address
            totalBurned
            burnCount
        }
        totalCount
    }
}
```

- Query top 10 recent burn

```graphql
query GetRecentBurns {
    burnEvents(
        orderBy: "timestamp"
        orderDirection: "desc"
        limit: 10
    ) {
        items {
            id
            from
            amount
            transactionHash
            blockNumber
            timestamp
        }
        totalCount
    }
}
```