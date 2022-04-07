import 'mocha';
import { expect } from 'chai';

import { Pokemon } from '../src/Pokemon';

describe('Tests de la clase Pokemon', () => {
  var pokemon: Pokemon;
  beforeEach(() => {
    pokemon = new Pokemon('Picachu', 100, 'electrico', 100);
  });
  it('Debería devolver el nombre del pokémon', () => {
    expect(pokemon.getNombre).to.exist;
    expect(pokemon.getNombre).to.be.a('function');
    expect(pokemon.getNombre()).to.equal('Picachu');
  });
  it ('Debería devolver el nivel del pokémon', () => {
    expect(pokemon.getNivel).to.exist;
    expect(pokemon.getNivel).to.be.a('function');
    expect(pokemon.getNivel()).to.equal(100);
  });
  it ('Debería devolver el tipo del pokémon', () => {
    expect(pokemon.getTipo).to.exist;
    expect(pokemon.getTipo).to.be.a('function');
    expect(pokemon.getTipo()).to.equal('electrico');
  });
  it ('Debería devolver el ataque del pokémon', () => {
    expect(pokemon.getAtaque).to.exist;
    expect(pokemon.getAtaque).to.be.a('function');
    expect(pokemon.getAtaque()).to.equal(100);
  });
  it ('Debería devolver el daño que causa el pokémon', () => {
    expect(pokemon.getDamage).to.exist;
    expect(pokemon.getDamage).to.be.a('function');
    expect(pokemon.getDamage()).to.equal(10000);
  }); 
});