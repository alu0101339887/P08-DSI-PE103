import { Pokemon } from "./Pokemon";

/**
 * Clase Pikachu. Almacenará la información del pokemon Pikachu
 */
export class Pikachu extends Pokemon {
  constructor(nombre: string, 
              nivel: number, 
              tipo: string, 
              ataque: number, 
              private ataqueEspecial: number) {
    super(nombre, nivel, tipo, ataque);
    this.ataqueEspecial = ataqueEspecial;
  }

  /**
   * Función que devuelve el nombre del pokémon.
   * @returns Retornará el el nombre del pokémon.
   */
  getNombre(): string {
    return `${super.getNombre()}`;
  }

  /**
   * Función que devuelve el nivel del pokémon.
   * @returns Retornará el nivel del pokémon.
   */
  getNivel(): number {
    return super.getNivel();
  }

  /**
   * Función que devuelve el tipo del pokémon.
   * @returns Retornará el tipo del pokémon.
   */
  getTipo(): string {
    return super.getTipo();
  }

  /**
   * Función que devuelve el ataque del pokémon.
   * @returns Retornará el ataque del pokémon.
   */
  getAtaque(): number {
    return super.getAtaque() + this.ataqueEspecial;
  }

  /**
   * Función que devuelve el ataque especial del pokémon.
   * @returns Retornará el ataque especial del pokémon.
   */
  getAtaqueEspecial(): number {
    return this.ataqueEspecial;
  }

  /**
   * Función que devuelve el daño que causa el pokémon.
   * @returns Retornará el daño que causa el pokémon.
   */
  getDamage(): number {
    return super.getDamage() + this.ataqueEspecial;
  }
}