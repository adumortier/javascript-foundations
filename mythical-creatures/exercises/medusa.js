class Medusa {
  constructor(name){
    this.name = name;
    this.statues = [];
  }

  stare(person) {
    if (this.statues.length < 3) {
      this.statues.push(person)
      person.stoned = true
    } else {
      this.statues[0].stoned = false
      this.statues.push(person)
      this.statues = this.statues.slice(1,4)
      person.stoned = true
    }


  }

}

module.exports = Medusa;
