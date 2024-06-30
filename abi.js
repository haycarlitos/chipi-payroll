export const payrollAbi = [
  {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "caller",
              "type": "address"
          }
      ],
      "name": "CallerAddress",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "addr",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          }
      ],
      "name": "DineroEnviado",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "addr",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          }
      ],
      "name": "DineroRecibido",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "addr",
              "type": "address"
          },
          {
              "components": [
                  {
                      "internalType": "uint256",
                      "name": "montoNomina",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint256",
                      "name": "periodoNominaEnDias",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint256",
                      "name": "ultimaNomina",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint256",
                      "name": "nominaNoUtilizada",
                      "type": "uint256"
                  }
              ],
              "indexed": false,
              "internalType": "struct Payroll.Nomina",
              "name": "nuevaNomina",
              "type": "tuple"
          }
      ],
      "name": "NominaCambiada",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "addr",
              "type": "address"
          },
          {
              "components": [
                  {
                      "internalType": "uint256",
                      "name": "montoNomina",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint256",
                      "name": "periodoNominaEnDias",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint256",
                      "name": "ultimaNomina",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint256",
                      "name": "nominaNoUtilizada",
                      "type": "uint256"
                  }
              ],
              "indexed": false,
              "internalType": "struct Payroll.Nomina",
              "name": "nuevaNomina",
              "type": "tuple"
          }
      ],
      "name": "NominaCreada",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "addr",
              "type": "address"
          }
      ],
      "name": "NominaEliminada",
      "type": "event"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "addr",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "montoNomina",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "periodoNominaEnDias",
              "type": "uint256"
          }
      ],
      "name": "agregarNomina",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address payable",
              "name": "addr",
              "type": "address"
          }
      ],
      "name": "eliminarNomina",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "owner",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "smartAccount",
              "type": "address"
          }
      ],
      "name": "removeWhitelistedSmartAccount",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address payable",
              "name": "addr",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          }
      ],
      "name": "retirarDeBalanceWallet",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          }
      ],
      "name": "retirarNomina",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address payable",
              "name": "addr",
              "type": "address"
          }
      ],
      "name": "retirarTodoDeBalanceWallet",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "addr",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          }
      ],
      "name": "sponsoredRetiro",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "smartAccount",
              "type": "address"
          }
      ],
      "name": "whitelistSmartAccount",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "name": "whitelistedSmartAccounts",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "stateMutability": "payable",
      "type": "receive"
  }
];
