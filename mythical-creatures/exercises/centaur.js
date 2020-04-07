class Centaur {

  constructor(name, breed) {
    this.name = name
    this.breed = breed 
    this.cranky = false
    this.standing = true
    this.layingDown = !this.standing
    this.shootCount = 0
  }
  shoot() {
    if (this.cranky || this.layingDown) { 
      return 'NO!'
    } else {
      this.shootCount += 1
      if (this.shootCount = 2) {
        this.cranky = true
      }
      return 'Twang!!!'
    }
  }
  sleep() {
    if (this.standing) {
      return 'NO!'
    } else {
      this.cranky = false
      return 'ZZZZ'
    }
  }
  drinkPotion() {
    if (this.standing) {
      this.cranky = !this.cranky
    } else {
      return 'Not while I\'m laying down!'
    }
  }

  layDown() {
    this.standing = false
    this.layingDown = true
  }

  standUp() {
    this.standing = true
    this.layingDown = false
  }

  run() {
    if (this.layingDown) {
      return 'NO!'
    } else {
      return 'Clop clop clop clop!!!'
    }
  }

}

module.exports = Centaur;