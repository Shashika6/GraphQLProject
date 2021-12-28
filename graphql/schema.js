const graphql = require("graphql");
const query = require("./query");

const schema = new graphql.GraphQLSchema({ query });

module.exports = schema;
