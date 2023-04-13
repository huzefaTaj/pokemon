import Layout from "../components/Layout";
import { getPokemonList } from "../graphql/get-pokemons";
import PokemonCard from "../components/PokemonCard";
import { useState } from "react";

export default function Home({ pokemonList }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage] = useState(20);

  const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
  const currentPokemonList = pokemonList.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  const totalPages = Math.ceil(pokemonList.length / pokemonPerPage);

  return (
    <Layout title={"pokemon"}>
      <div className="pokemon-list">
        {currentPokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <div className="pagination">
        {currentPage > 1 && (
          <button
            style={{ position: "fixed", bottom: "20px", left: "20px" }}
            className="pagination-btn"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
        )}
        {currentPage < totalPages && (
          <button
            style={{ position: "fixed", bottom: "20px", right: "20px" }}
            className="pagination-btn"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        )}
      </div>
      <br />
      <hr></hr>
      <p className="text-lg" style={{ textAlign: "center" }}>
        {" "}
        copyrigth &copy; HuzefaTaj
      </p>
    </Layout>
  );
}

export async function getStaticProps() {
  const pokemonList = await getPokemonList(100000);
  return {
    props: { pokemonList },
  };
}
