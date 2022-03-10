const broccoli = artifacts.require("../contracts/broccoli.sol");
const initialCut = 10;
const initialMinimumDepositRatio = 50;

module.exports = function(deployer, network, accounts) {
    deployer.then(async() => {
        await deployer.deploy(broccoli, initialMinimumDepositRatio, initialCut, {
            from: accounts[0],
        });
    });
};