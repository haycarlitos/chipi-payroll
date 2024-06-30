import { http, createPublicClient, encodeFunctionData } from "viem";
import { baseSepolia } from "viem/chains";
import {
  createSmartAccountClient,
  ENTRYPOINT_ADDRESS_V06,
} from "permissionless";
import { privateKeyToSimpleSmartAccount } from "permissionless/accounts";
import { createPimlicoPaymasterClient } from "permissionless/clients/pimlico";
import { payrollAbi } from "./abi.js"; // Import the updated ABI from abi.js

// Set this to the Node RPC URL from Step 1.
const rpcUrl = 'baserpc'; // This is a test RPC URL. Do not use it in production

const publicClient = createPublicClient({
  transport: http(rpcUrl),
});

const simpleAccount = await privateKeyToSimpleSmartAccount(publicClient, {
  // Set this to your private key
  privateKey: "privatekey", // This is a test private key. Do not use it in production
  factoryAddress: "0x9406Cc6185a346906296840746125a0E44976454",
  entryPoint: ENTRYPOINT_ADDRESS_V06,
});

const cloudPaymaster = createPimlicoPaymasterClient({
  chain: baseSepolia,
  transport: http(rpcUrl),
  entryPoint: ENTRYPOINT_ADDRESS_V06,
});

const smartAccountClient = createSmartAccountClient({
  account: simpleAccount,
  chain: baseSepolia,
  bundlerTransport: http(rpcUrl),
  // IMPORTANT: Set up Cloud Paymaster to sponsor your transaction
  middleware: {
    sponsorUserOperation: cloudPaymaster.sponsorUserOperation,
  },
});

// Replace with your Payroll contract address
const payrollContractAddress = "0xF86B97A723C90bdD2a1512571E52FFfb6f13f380";

(async () => {
  const recipientAddress = "0xF9b84556Eb602b39bbACAE65e0904b70C93E2d76";
  const smartAccountAddress = smartAccountClient.account.address;

  console.log(`Attempting sponsoredRetiro for smart account: ${smartAccountAddress}`);

  const callData = encodeFunctionData({
    abi: payrollAbi,
    functionName: "sponsoredRetiro",
    args: [recipientAddress, 1], // Replace with the actual amount to withdraw
  });

  try {
    const txHash = await smartAccountClient.sendTransaction({
      account: smartAccountClient.account,
      to: payrollContractAddress,
      data: callData,
      value: 0n,
    });
    console.log("✅ Transaction successfully sponsored!");
    console.log(`🔍 View on Etherscan: https://sepolia.basescan.org/tx/${txHash}`);
  } catch (err) {
    console.error("Error sending transaction:", err);
  }
})();
