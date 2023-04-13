import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";
import { getPokemonById } from "../../components/getdetailpokemon";

const Detail = ({ pokemon, query }) => {
  return (
    <Layout title={pokemon.name}>
      <h1 className="text-2xl font-bold text-center my-8">
        {pokemon.name} #{pokemon.number}
      </h1>
      <img
        className="block mx-auto rounded-lg shadow-lg"
        src={pokemon.image}
        alt={pokemon.name}
        style={{ height: "300px", marginBottom: "10px", width: " 300px" }}
      />
      <p className="text-2xl font-bold text-center my-8">
        {pokemon.types.map((type, index) => (
          <span
            style={{ margin: "3px" }}
            key={index}
            className={`inline-block px-2 py-1 text-sm font-semibold rounded-full ${
              type === "Grass"
                ? "bg-green-500 text-white"
                : type === "Fire"
                ? "bg-red-500 text-white"
                : type === "Poison"
                ? "bg-green-500 text-white"
                : type === "Water"
                ? "bg-blue-500 text-white"
                : type === "Flying"
                ? "bg-gray-300 text-black"
                : "bg-yellow-500 text-gray-900"
            }`}
          >
            {type}
          </span>
        ))}
      </p>

      <hr className="my-8" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
        <div className="text-center">
          <p className="text-lg font-bold">Max CP:</p>
          <div className="w-48 h-4 bg-gray-300 rounded-full overflow-hidden mx-auto">
            <div className="w-24 h-full bg-blue-500"></div>
          </div>
          <p className="text-lg font-bold">{pokemon.maxCP}</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold">Max HP:</p>
          <div className="w-48 h-4 bg-gray-300 rounded-full overflow-hidden mx-auto">
            <div className="w-36 h-full bg-blue-500"></div>
          </div>
          <p className="text-lg font-bold">{pokemon.maxHP}</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold">Flee Rate:</p>
          <div className="w-48 h-4 bg-gray-300 rounded-full overflow-hidden mx-auto">
            <div className="w-12 h-full bg-blue-500"></div>
          </div>
          <p className="text-lg font-bold">{pokemon.fleeRate}</p>
        </div>
      </div>

      <hr className="my-8" />

      <h3 className="text-lg font-bold text-center my-2">Height & Weight</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-center">
          <p className="text-lg">
            <span className="font-bold">Minimum Height:</span>{" "}
            {pokemon.height.minimum}
          </p>
          <p className="text-lg">
            <span className="font-bold">Maximum Height:</span>{" "}
            {pokemon.height.maximum}
          </p>
        </div>
        <div className="text-center">
          <p className="text-lg">
            <span className="font-bold">Minimum Weight:</span>{" "}
            {pokemon.weight.minimum}
          </p>
          <p className="text-lg">
            <span className="font-bold">Maximum Weight:</span>{" "}
            {pokemon.weight.maximum}
          </p>
        </div>
      </div>
      <hr />
      <br />
      <h3 className="text-lg font-bold text-center my-2">Weaknesses</h3>
      <ul className="grid grid-cols-2 gap-4">
        {pokemon.weaknesses.map((weakness, index) => (
          <li
            key={index}
            className="weakness-item p-2 bg-gray-100 rounded-md text-center font-medium hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            {weakness}
          </li>
        ))}
      </ul>

      {pokemon.evolutions && pokemon.evolutions.length > 0 && (
        <>
          <br />
          <hr></hr>
          <h3 className="text-lg font-bold text-center my-2">Evolution</h3>
          <div className="card-grid">
            {pokemon.evolutions.map((evolution, index) => (
              <Link key={index} href={`/pokemon/${evolution.id}`}>
                <div className="card">
                  <img src={evolution.image} alt={evolution.name} />
                  <p>
                    {evolution.name} ({evolution.number})
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
      <br />
      <hr></hr>
      <p className="text-lg" style={{ textAlign: "center" }}>
        {" "}
        copyrigth &copy; HuzefaTaj
      </p>
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  const pokemon = await getPokemonById(query.id);
  return {
    props: { pokemon },
  };
}

export default Detail;
