const { default: axios } = require("axios");

const resolvers = {
  Query: {
    async getAllPeople() {
      const response = await axios({ 
        url: 'https://swapi.dev/api/people',
        method: 'GET'
      })
      .then((response) => response.data.results)
      .catch((error) => ({ data: null, error }));

      return response;
    },
    async next(_, { pageNumber }) {
      const response = await axios({ 
        url: `https://swapi.dev/api/people/?page=${ pageNumber }`,
        method: 'GET'
      })
      .then((response) => response.data.results)
      .catch((error) => ({ data: null, error }));

      return response;
    },
    async searchPerson(_, { personName }) {
      const response = await axios({ 
        url: encodeURI(`https://swapi.dev/api/people/?search=${ personName }`),
        method: 'GET'
      })
      .then((response) => response.data.results[0])
      .catch((error) => ({ data: null, error }));

      return response;
    },
  }
};

module.exports = { resolvers };