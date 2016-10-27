class Person {
    constructor(name, height) {
        this.name = name
        this.height = height
        this.sport
        // this.setSport = this.setSport.bind(this)
        // this.position
        this.setPosition = this.setPosition.bind(this)

    }
    // setSport(sport) {
    //     this.sport = sport + ''
    // }
    setPosition(position) {
        this.position = position
    }

}

class Athlete extends Person {
    constructor(name) {
        super(name, position)
        // this.position
        // this.setPosition = this.setPosition.bind(this)
    }
    setPosition(position) {
        this.position = position
    }

}
class BaseballPlayer extends Athlete {
    constructor(name) {
        super(position)
    }
    setPosition(position) {
        this.position = position
    }

}


var youngSam = new Person('youngSam')
youngSam.height = '6"2'
console.log(youngSam)
var samYoung = new Person('samYoung')
samYoung.position = 'Pitcher'
console.log(samYoung)
