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
        <p>classification: {pokemon.classification}</p>
      </Link>
    </div>
  );
}
