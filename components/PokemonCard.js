import Link from "next/link";
export default function PokemonCard({ pokemon }) {
  return (
    <div className="pokemon-card">
      <Link href={`/pokemon/${pokemon.id}`}>
        <img src={pokemon.image} />
        <h2>
          <span className="m-2">#{pokemon.number}</span>
          <span>{pokemon.name}</span>
        </h2>
        <p style={{ padding: "1px" }}>
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
        <p>classification: {pokemon.classification}</p>
      </Link>
    </div>
  );
}
