import { createConfig } from "ponder";

import { BethContractAbi } from "./abis/BethContractAbi";

export default createConfig({
  chains: {
    mainnet: {
      id: 1,
      rpc: process.env.PONDER_RPC_URL_1!,
    },
  },
  contracts: {
    Beth: {
      chain: "mainnet",
      abi: BethContractAbi,
      address: "0x2cb662Ec360C34a45d7cA0126BCd53C9a1fd48F9",
      startBlock: 23226197,
    },
  },
  database: {
    kind: "postgres",
    connectionString: process.env.DATABASE_URL!,
  }
});
