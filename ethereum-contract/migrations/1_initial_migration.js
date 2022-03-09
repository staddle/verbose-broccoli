const Migrations = artifacts.require("Migrations");
const broccoli = artifacts.require("broccoli");

module.exports = function(deployer) {
    deployer.deploy(Migrations);
    deployer.deploy(broccoli);
};