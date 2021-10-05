const http = require("http");
const express = require("express");
const app = express();
const PORT = 6969;
// const userData = require("./MOCK_DATA.json");
const graphql = require("graphql");
// const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;
const schema = require("./Shema/index");
const { graphqlHTTP } = require("express-graphql");

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log("server running");
});
