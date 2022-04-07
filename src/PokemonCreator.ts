import { Pokemon } from './Pokemon';

export abstract class PokemonCreator {
  /**
   * Función abstracta para crear una instancia de Pokémon.
   */
  abstract factoryMethod(): Pokemon;

  /**
   * Función que muestra la información de un Pokémon.
   */
  mostrarPokemon(): void {
    let pokemon = this.factoryMethod();
    console.log(`Nombre: ${pokemon.getNombre()}`);
    console.log(`Tipo: ${pokemon.getTipo()}`);
    console.log(`Nivel: ${pokemon.getNivel()}`);
    console.log(`Ataque: ${pokemon.getAtaque()}`);
    console.log(`Daño: ${pokemon.getDamage()}`);
  }
}

