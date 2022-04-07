import 'mocha';
import { expect } from 'chai';

import { Pikachu } from '../src/Pikachu';

describe('Tests de la clase Pikachu', () => {
  var pikachu: Pikachu;
  beforeEach(() => {
    pikachu = new Pikachu('Picachu', 100, 'electrico', 100, 150);
  });
  it('Debería devolver el nombre del pokémon', () => {
    expect(pikachu.getNombre).to.exist;
    expect(pikachu.getNombre).to.be.a('function');
    expect(pikachu.getNombre()).to.equal('Picachu');
  });
  it ('Debería devolver el nivel del pokémon', () => {
    expect(pikachu.getNivel).to.exist;
    expect(pikachu.getNivel).to.be.a('function');
    expect(pikachu.getNivel()).to.equal(100);
  });
  it ('Debería devolver el tipo del pokémon', () => {
    expect(pikachu.getTipo).to.exist;
    expect(pikachu.getTipo).to.be.a('function');
    expect(pikachu.getTipo()).to.equal('electrico');
  });
  it ('Debería devolver el ataque del pokémon', () => {
    expect(pikachu.getAtaque).to.exist;
    expect(pikachu.getAtaque).to.be.a('function');
    expect(pikachu.getAtaque()).to.equal(100);
  });
  it ('Debería devolver el ataque especial del pokémon', () => {
    expect(pikachu.getAtaqueEspecial).to.exist;
    expect(pikachu.getAtaqueEspecial).to.be.a('function');
    expect(pikachu.getAtaqueEspecial()).to.equal(150);
  });
});
