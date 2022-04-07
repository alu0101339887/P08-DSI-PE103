/**
 * Clase para definir la información de cada pokémon.
 */
 export class Pokemon {
  constructor(private nombre: string, 
              private nivel: number, 
              private tipo: string, 
              private ataque: number) {}

  /**
   * Función que devuelve el tipo del pokémon.
   * @returns Retornará el tipo del pokémon.
   */
  getTipo(): string {
    return this.tipo;
  }

  /**
   * Función que devuelve el nombre del pokémon.
   * @returns Retornará el nombre del pokémon.
   */
  getNombre(): string {
    return this.nombre;
  }

  /**
   * Función que devuelve la nivel del pokémon.
   * @returns Retornará la nivel del pokémon.
   */
  getNivel(): number {
    return this.nivel;
  }

  /**
   * Función que devuelve el ataque del pokémon.
   * @returns Retornará el ataque del pokémon.
   */
  getAtaque(): number {
    return this.ataque;
  }

  /**
   * Función que devuelve el daño que causa el pokémon.
   * @returns Retornará el daño que causa el pokémon.
   */
  getDamage(): number {
    return this.ataque * this.nivel;
  }
}