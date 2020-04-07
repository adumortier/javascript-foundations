class Werewolf {
  constructor(name, location = 'Basement') {
    this.name = name
    this.location = location
    this.human = true
    this.wolf = false
    this.hungry = false
  }
  change() {
    this.human = !this.human
    this.wolf = !this.wolf
    this.hungry = !this.hungry
  }
  eat(person) {
    if (this.hungry) {
      this.change()
      person.alive = false
      return "That was delicious"
    } else {
      return "I'm not hungry"
    }
  }
}

module.exports = Werewolf;