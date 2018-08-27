import 'cross-fetch/polyfill';
import ApolloClient, { gql } from 'apollo-boost';

require('dotenv').config();

const GET_ORGANIZATION = gql`
  {
    organization(login: "the-road-to-learn-react") {
      name
      url
    }
  }
`;

client
  .query({
    query: GET_ORGANIZATION,
  })
  .then(console.log);

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
      },
    });
  },
});