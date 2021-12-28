const { GraphQLObjectType, GraphQLNonNull, GraphQLList, GraphQLInt, GraphQLString } = require("graphql");

const GraphQLUser = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: {
      description: "userId",
      type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
    },
    name: {
      description: "name of user",
      type: new GraphQLNonNull(GraphQLInt),
    },
    email: {
      description: "email of user",
      type: new GraphQLNonNull(GraphQLInt),
    }
  }),
});

module.exports = GraphQLUser;
