class Park {
  constructor(name, price, dinos) {
    this.name = name;
    this.price = price;
    this.dinos = [];
  };

  addDino(dino) {
    this.dinos.push(dino);
  };

  removeDino(trex) {
    for (var i = 0; i < this.dinos.length; i++) {
      if(this.dinos[i] == trex) {
        this.dinos.splice(i,1);
        i--;
      };
    };

  };

  mostPopular() {
    let mostguests = 0;
    let mostpopular;
    for (var i = 0; i < this.dinos.length; i++) {
      if (this.dinos[i].guestsAttractedPerDay > mostguests) {
        mostguests = this.dinos[i].guestsAttractedPerDay;
        mostpopular = this.dinos[i];
      }
    }
    return mostpopular;
  };

  allSpecies(species) {
    let result = [];
    for (var i = 0; i < this.dinos.length; i++) {
      if(this.dinos[i].species === species) {
        result.push(this.dinos[i]);
        console.log(result);
      };
    };
    return result;
  };

  makeSpeciesExtinct(species) {
    for (var i = 0; i < this.dinos.length; i++) {
      if(this.dinos[i].species === species) {
        this.dinos.splice(i, 1);
        i--;
      }
    }
  }

  totalVisitorsDay() {
    let totalVisitors = 0;
    let d;
    for (d of this.dinos) {
      totalVisitors += d.guestsAttractedPerDay;
    }
    return totalVisitors;
  }

  totalVisitorsYear() {
    return this.totalVisitorsDay() * 365;
  }

  listDietTypes() {
    let carni = 0;
    let omni = 0;
    let herbi = 0;

    for (var i = 0; i < this.dinos.length; i++) {
      if(this.dinos[i].diet === 'Carnivore') {
        carni++
      } else if(this.dinos[i].diet === 'Omnivore') {
        omni++
      } else if(this.dinos[i].diet === 'Herbivore') {
        herbi++
      };
    };

    let result = { Carnivore: carni, Herbivore: herbi, Omnivore: omni };
    return result;
  }

};

module.exports = Park;
