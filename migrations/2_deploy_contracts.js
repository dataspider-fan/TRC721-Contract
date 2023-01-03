var MyToken = artifacts.require("./MyNFTToken.sol");

module.exports = function(deployer) {
  deployer.deploy(MyToken);
};
