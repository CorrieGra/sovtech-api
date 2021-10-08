const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./schema/TypeDefs');
const { resolvers } = require('./schema/Resolvers');

var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

const startServer = async () => {
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
};

startServer();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.listen(3001, () => {
  console.log('SERVER IS RUNNING ON PORT 3001');
});

module.exports = app;

