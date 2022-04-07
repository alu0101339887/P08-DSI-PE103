import { Pokemon } from "./Pokemon";
import { Pikachu } from "./Pikachu";
import { PokemonCreator } from "./PokemonCreator";

/**
 * Esta clase de encargará de crear un objeto pokemon
 */
export class PikachuCreator extends PokemonCreator {
  constructor(private name: string, 
              private nivel: number,
              private tipo: string,
              private ataque: number,
              private ataqueEspecial: number) {
    super();
  }

  factoryMethod(): Pokemon {
    return new Pikachu(this.name, this.nivel, this.tipo, this.ataque, this.ataqueEspecial);
  }
}