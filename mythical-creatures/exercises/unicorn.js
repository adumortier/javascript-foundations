class Unicorn {
  constructor(name, color = 'white') {
    this.name = name
    this.color = color 
  }

  isWhite() {
    return false;
  }

  says(someText) {
    return '**;* ' + someText + ' *;**'
  }

}

module.exports = Unicorn;
