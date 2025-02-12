require("babel-register");
require("babel-polyfill");

module.exports = {
	networks: {
		development: {
			host: "127.0.0.1",
			port: "7545",
			network_id: "*", // Match any network
		},
	},
	contracts_directory: "./src/contracts/",
	contracts_build_directory: "./src/truffle-abis/",
	compilers: {
		solc: {
			version: "0.8.19",
			optimizer: {
				enabled: true,
				runs: 200,
			},
		},
	},
};
