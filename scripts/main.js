/* 
* The Traveler Class

The Traveler class (blueprint) should set the following properties for each instance:

    a name, which must be provided as a parameter to the constructor.
    an amount of food, with an initial value of 1.
    an isHealthy property, with an initial value of true, which indicates whether a traveler is sick.

The Traveler class should also have the following methods:

    hunt() – Increases the traveler's food by 2.
    eat() – Consumes 1 unit of the traveler's food. If the traveler doesn't have any food left to eat, the traveler is no longer healthy (set isHealthy to false).
*/
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
    this.food--;
    if (this.food < 1) {
      this.isHealthy = false;
    }
  }
}
/*
* The Wagon Class

The Wagon class should set the following properties for each instance:

    a capacity, which must be provided to the constructor: this is the maximum number of passengers a wagon can hold.
    a passengers list, which is initially an empty array.

The Wagon class should have these methods:

    getAvailableSeatCount() – Returns the number of empty seats, determined by the capacity set when the wagon was created, subtracted by the number of passengers currently on board.
    join(traveler) - Adds the traveler to the wagon if there is space. If the wagon is already at maximum capacity, don't add them.
    shouldQuarantine() - Returns true if there is at least one unhealthy person in the wagon. Return false if not.
    totalFood() - Returns the total amount of food among all passengers in the wagon.
*/
class Wagon extends Traveler {
  constructor(cap) {
    this.capacity = cap;
    this.passengersList = [];
    super(name);
    //Got call info from class Traveler. Is 'extends' the answer?
  }
  getAvailableSeatCount() {
    this.capacity = this.capacity - this.passengersList.length;
    // cap minus current passengers list = avail in Numbers or String
  }
  join(traveler) {
    this.getAvailableSeatCount();
    if (this.passengersList.length < this.capacity) {
      this.passengersList.push();
    } else {
      return false;
    }
  }
  shouldQuarantine() {
    if (Traveler.isHealthy === false) {
      return true;
    } else {
      return false;
    }
  }
  totalFood() {
    for (i = 0; i < Wagon.passengersList.length; i++) {
      Traveler.food++;
    }
    // Will this properly add each of the passengers food by calling it by ClassName.property?
    // Syntax used twice - Traveler.food & Traveler.isHealthy
  }
}
