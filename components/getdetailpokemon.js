import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql-pokemon2.vercel.app/",
  cache: new InMemoryCache(),
});

export async function getPokemonById(id) {
  const { data } = await client.query({
    query: gql`
      query pokemon($id: String!) {
        pokemon(id: $id) {
          id
          number
          name
          weight {
            minimum
            maximum
          }
          height {
            minimum
            maximum
          }
          classification
          types
          resistant
          evolutions {
            name
            number
            id
            image
            classification
          }
          weaknesses
          fleeRate
          maxCP
          maxHP
          image
        }
      }
    `,
    variables: { id },
  });
  return data.pokemon;
}
