const {
    GraphQLBoolean,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
  } = require("graphql");
const GraphqlUserType = require("./types/user");

  const query = new GraphQLObjectType({
    name: "Query",
    fields: () => ({
      users: {
        type: new GraphQLList(GraphqlUserType),
        args: {
          id: {
            type: GraphQLString,
          },
          name: {
            type: GraphQLString,    
          },
          email: {
            type:GraphQLString,
          }
        },
      },
    }),
});

module.exports = query;