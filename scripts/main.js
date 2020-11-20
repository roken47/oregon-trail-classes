class Traveler {
  constructor(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
  }
  hunt() {
    this.food += 2;
  }
  eat() {
    if (this.food > 0) {
      this.food--;
      this.isHealthy = true;
    } else {
      this.isHealthy = false;
    }
  }
}
class Wagon {
  constructor(cap) {
    // super();
    this.capacity = cap;
    this.passengers = [];
    //Got call info from class Traveler. Is 'extends' the answer?
    //Cramer said not 'extends'
  }
  getAvailableSeatCount() {
    return this.capacity - this.passengers.length;
    // cap minus current passengers list = avail in Numbers or String
  }
  join(traveler) {
    if (this.passengers.length < this.capacity) {
      return this.passengers.push(traveler);
    } else {
      return false;
    }
  }
  shouldQuarantine() {
    for (let i = 0; i < this.passengers.length; i++) {
      if (this.passengers[i].isHealthy === false) {
        return true;
      }
    }
    return false;
  }
  totalFood() {
    for (var i = 0, result = 0; i < this.passengers.length; i++) {
      result += this.passengers[i].food;
    }
    return result;
  }
}

/* Stretch Goals

    Add the wagons and the travelers to the DOM.
    Display relevent information in the DOM about the wagons and traveler – for example: travelers name/food/isHealthy, and/or Wagon's passengers/capacity.
    Add buttons to your classes – for example: make a traveler eat, add a traveler to a wagon, check if a wagon should quarantine, etc.
    Add a button to create a new traveler based on a name the user inputs.
    Add animations simulating travel, etc.
    Generally just make your game feel more like the original Oregon Trail.
*/
