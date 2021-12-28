var express = require('express');
var { graphqlHTTP } = require('express-graphql');
const schema = require("./graphql/schema");

// Resolver
var root = { hello: () => 'Hello world!' };

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Graphql Server running'));

