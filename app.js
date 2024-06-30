import { payrollAbi } from './abi.js'; // Import the ABI from abi.js

const web3 = new Web3('');

const payrollContractAddress = "0xF86B97A723C90bdD2a1512571E52FFfb6f13f380";

const payrollContract = new web3.eth.Contract(payrollAbi, payrollContractAddress);

const log = (message) => {
  const logs = document.getElementById('logs');
  logs.innerHTML += `<p>${message}</p>`;
  logs.scrollTop = logs.scrollHeight;
};

document.getElementById('retirarButton').addEventListener('click', async () => {
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const accounts = await web3.eth.getAccounts();
      const sender = accounts[0];
      
      log(`Requesting transaction to retirarNomina from ${sender}...`);
      
      const tx = await payrollContract.methods.retirarNomina(web3.utils.toWei('1', 'ether')).send({ from: sender });
      
      log(`Transaction successful: ${tx.transactionHash}`);
    } catch (err) {
      log(`Error: ${err.message}`);
    }
  } else {
    log('MetaMask is not installed.');
  }
});

document.getElementById('sponsoredRetiroButton').addEventListener('click', async () => {
  const privateKey = "0x900c6bc597ac2f0dd5a225d0c743e12d23c05c04886c43d200156595eb91a9e2"; // This is a test private key. Do not use it in production
  const simpleAccount = await privateKeyToSimpleSmartAccount(publicClient, {
    privateKey: privateKey,
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
    middleware: {
      sponsorUserOperation: cloudPaymaster.sponsorUserOperation,
    },
  });

  const recipientAddress = "0xF9b84556Eb602b39bbACAE65e0904b70C93E2d76";
  
  const callData = encodeFunctionData({
    abi: payrollAbi,
    functionName: "sponsoredRetiro",
    args: [recipientAddress, 1000], // Replace with the actual amount to withdraw
  });

  try {
    log(`Requesting sponsored transaction for ${recipientAddress}...`);
    
    const txHash = await smartAccountClient.sendTransaction({
      account: smartAccountClient.account,
      to: payrollContractAddress,
      data: callData,
      value: 0n,
    });
    
    log(`✅ Transaction successfully sponsored!`);
    log(`🔍 View on Etherscan: https://sepolia.basescan.org/tx/${txHash}`);
  } catch (err) {
    log(`Error sending transaction: ${err.message}`);
  }
});
