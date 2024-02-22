// @ts-check

const config = {
  endpoint: "https://neesharma-nosql.documents.azure.com:443/",
  key: "GBiOuE2J4SEfd8eJMH8IgjEyPipD9vWiXUbm9F9niEAve5Fkz1l836YpEiixY8GiDAnc88NWK3CZACDbJv1Qyw==",
  databaseId: "Tasks",
  containerId: "Items",
  partitionKey: { kind: "Hash", paths: ["/category"] }
};

module.exports = config;
