//Literal Object
var food = {
    edible: true
}
food.edible = true
var pizza = Object.create(food)
pizza.edible = false
console.log(pizza)
console.log(food)


//New Object
var food = new Object()
food.edible = true
var tacos = Object.create(food)


//Constructor Function
var Food = function() { //<--typically capitalize the variable so we know this is a Constructor function
    this.edible = true
    this.totalEaten = 0
    this.eat = function() {
        this.totalEaten++
        console.log('Now eating ' + this.type + '1 of ' + this.totalEaten)
    }
}

var pizza1 = new Food()    //<--called copies, or instances, of their master template (Food()) in this case
pizza1.type = 'Taco Pizza '
console.log(pizza1)

var pizza2 = new Food()
pizza2.type = 'Hawaiian Pizza '
console.log(pizza2)

Food.prototype.calories = 1200


class Vehicle {
    constructor(make, model) {
        this.make = make          //<- These variables dont exist until you make a copy
        this.model = model
        this.year
        this.setYear = this.setYear.bind(this)  //<- need to have a bind statement in the constructor for each child function of the constructo function
    }
    setYear(year) {
        this.year = year + ' year'
    }
    drive(speed) {
        console.log(`${make} ${model} is driving ${speed}mph.`)
    }
}

class Toyota extends Vehicle {
    constructor(model) {
        super('Toyota', model)     //<--always include the word super() for any class that extends a constructor function
    }
}

class Lexus extends Vehicle {
    constructor(model) {
        super('Lexus', model)
    }
}
var es350 = new Lexus('ES 350')
es350.year = 2009
console.log(es350)
var $4Runner = new Toyota('4Runner')
//$4Runner.setYear(2006)
$4Runner.year = 2006
console.log($4Runner)

var prius = new Toyota('Prius')
prius.year = 2008
console.log(prius)



//SPACESHIPS
var spaceship = {
    top_speed: '2lyph',
    name: 'Galaxy Cruiser'
}
var spaceship1 = Object.create(spaceship)
console.log(spaceship1)
