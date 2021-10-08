const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./schema/TypeDefs');
const { resolvers } = require('./schema/Resolvers');

const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

require('dotenv').config();

const app = express();
const __port__ = process.env.APP_PORT;

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

app.listen(__port__, () => {
  console.log(`SERVER IS RUNNING ON PORT ${__port__}`);
});

module.exports = app;

