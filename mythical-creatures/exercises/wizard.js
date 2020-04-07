class Wizard {
  constructor(info) {
    this.name = info.name;
    this.rested = true
    this.spellCount = 0
    if (info.hasOwnProperty("bearded")) {
      this.bearded = info.bearded;
    }
    else {
      this.bearded = true;
    }
  }
  incantation(string) {
    return string.toUpperCase()
  }

  cast() {
    if (this.spellCount > 2) {
      this.rested = false
      return 'I SHALL NOT CAST!'
    } else {
      this.spellCount = this.spellCount + 1 
      return 'MAGIC BULLET'
    }
  }

}

module.exports = Wizard;