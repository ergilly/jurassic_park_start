const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');

describe('Park', function() {
  let park;
  let trex;
  let velo;
  let bron;
  let steg;
  let tric;
  let bron2;
  beforeEach( () => {
    velo = new Dinosaur('Velociraptor', 'Carnivore', 4000);
    bron = new Dinosaur('Brontosaurus', 'Herbivore', 1200);
    steg = new Dinosaur('Stegosaurus', 'Omnivore', 2400);
    tric = new Dinosaur('Tricerotops', 'Omnivore', 2200);
    trex = new Dinosaur('Trex', 'Carnivore', 3600);
    bron2 = new Dinosaur('Brontosaurus', 'Herbivore', 1150)
    park = new Park('Jurrasic World', 45, []);
    park.addDino(velo);
    park.addDino(bron);
    park.addDino(steg);
    // write your code here
  })

  test('should have a name', () => {
    expect(park.name).toBe('Jurrasic World');
    // write your code here
  });

  test('should have a ticket price', () => {
    expect(park.price).toBe(45);
    // write your code here
  });

  test('should have a collection of dinosaurs', () => {
    expect(park.dinos).toEqual([velo, bron, steg]);
    // write your code here
  });

  test('should be able to add a dinosaur to its collection', () => {
    park.addDino(trex);
    expect(park.dinos.length).toBe(4);
    // write your code here
  });

  test('should be able to remove a dinosaur from its collection', () => {
    park.removeDino(bron);
    expect(park.dinos.length).toBe(2);
    // write your code here
  });

  test('should be able to find the dinosaur that attracts the most visitors', () => {
    expect(park.mostPopular()).toBe(velo)
    // write your code here
  });

  test('Total visitors per day', () => {
    expect(park.totalVisitorsDay()).toBe(7600);
  });

  test('Total visitors per day', () => {
    expect(park.totalVisitorsYear()).toBe(2774000);
  });

  test('should be able to find all dinosaurs of a particular species', () => {
    park.addDino(bron2);
    expect(park.allSpecies('Brontosaurus')).toEqual([bron, bron2]);
    // write your code here
  });

  test('should be able to remove all dinosaurs of a particular species', () => {
    park.addDino(bron2);
    park.makeSpeciesExtinct('Brontosaurus');
    expect(park.allSpecies('Brontosaurus')).toEqual([]);
    // write your code here
  });

  test('list diet types and number of each', () => {
    park.addDino(tric);
    park.addDino(trex);
    park.addDino(bron2);
    expect(park.listDietTypes()).toEqual({ Carnivore: 2, Herbivore: 2, Omnivore: 2 });

  });

});
