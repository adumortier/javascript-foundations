class Pirate {
  constructor(name, job = 'Scallywag') {
    this.name = name
    this.job = job
    this.cursed = false
    this.act_count = 0
    this.booty = 0
  }
  commitHeinousAct(){
    this.act_count += 1
    if (this.act_count >= 3) {
    this.cursed = true
    }
  }
  robShip() {
    this.booty += 100
    return 'YAARRR!'

  }

}

module.exports = Pirate;