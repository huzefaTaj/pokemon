import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql-pokemon2.vercel.app/",
  cache: new InMemoryCache(),
});

export async function getPokemonList(first) {
  const { data } = await client.query({
    query: gql`
      query pokemons($first: Int!) {
        pokemons(first: $first) {
          id
          number
          name

          classification
          types
          image
        }
      }
    `,
    variables: { first },
  });
  const pokemons = data.pokemons;
  pokemons.forEach((pokemon) => console.log(pokemon));
  return pokemons;
}
