const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Person {
    name: String
    height: String
    mass: String
    gender: String
    homeworld: String
  }

  # Queries for type definitions
  type Query {
    getAllPeople: [Person!]!
    next(pageNumber: String!): [Person!]!
    searchPerson(personName: String!): Person!
  }

  # Mutations for type definitions
`;

module.exports = { typeDefs };