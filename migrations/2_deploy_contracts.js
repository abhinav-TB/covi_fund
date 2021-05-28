const Covifund = artifacts.require("Covifund");

module.exports = async function(deployer) {
	await deployer.deploy(Covifund)
};