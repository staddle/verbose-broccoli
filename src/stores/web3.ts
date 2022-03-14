import { defineStore } from "pinia";
import { getWeb3 } from "@/integration/etherConfig";

export const useWeb3 = defineStore('web3', {
  state: () => ({
    web3: {
        isInjected: false,
        web3Instance: null,
        networkId: null,
        coinbase: null,
        balance: null,
        error: null
    },
    contractInstance: null    
  }),
  getters: { },
  actions: { 
    registerWeb3() {
      getWeb3.then(result => {
        this.web3.isInjected = result.injectedWeb3;
        this.web3.web3Instance = result.web3();
        this.web3.networkId = result.networkId;
        this.web3.coinbase = result.coinbase;
        this.web3.balance = parseInt(result.balance, 10);
      })
      .catch(error => {
        console.log("error in registerWeb3: " + error);
      });
    },
  }
});
