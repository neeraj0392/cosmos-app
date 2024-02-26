// @ts-check

const config = {
  endpoint: "https://neesharma-no-sql.documents-staging.windows-ppe.net:443/",
  key: "LGR54zEVvnl1yH5IyZn94ClUUMTXDX95tHnszWPbWohG6dOcZmvrCFPZSy0vSBPDYuTQiX23bkSLACDbK4pOcw==",
  databaseId: "Tasks",
  containerId: "Items",
  partitionKey: { kind: "Hash", paths: ["/category"] }
};

module.exports = config;
