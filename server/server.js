const graphqlHttp = require('express-graphql');
const express = require('express');
const cors = require('cors');
const graphqlSchema = require('./graphql/schema');
const graphqlResolvers = require('./graphql/resolvers');
require('./configuration/data_source');

const app = express();
const PORT = 3000;

app.use(cors());


app.use(graphqlHttp({
 schema: graphqlSchema,
 rootValue: graphqlResolvers, 
 graphiql: true
}));

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
})
