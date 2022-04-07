import { Pokemon } from "./Pokemon";
import { PokemonCreator } from "./PokemonCreator";

export class PikachuCreator extends PokemonCreator {
  constructor(private name: string, 
              private nivel: number,
              private tipo: string,
              private ataque: number) {
    super();
  }

  factoryMethod(): Pokemon {
    return new Pokemon(this.name, this.nivel, this.tipo, this.ataque);
  }
}