//SPACESHIPS
var spaceship1 = {
    name: 'Galaxy Cruiser',
    top_speed: '2lyph',
    launch: function(name, top_speed) {
        console.log(this.name + ' is launching to infinity and beyond at ' + top_speed
    + '!')
    }
}
spaceship1.launch('Galaxy Cruiser','2lyph')
//console.log(spaceship1)


var spaceship2 = new Object()
spaceship2.name = 'Star Singer'
spaceship2.top_speed = '2.5lyph'
spaceship2.launch = function(name, top_speed) {
    console.log(this.name + ' is launching to infinity and beyond at ' + top_speed
+ '!')
}
spaceship2.launch('Star Singer', '2.2lyph')
//console.log(spaceship2)

var spaceship3 = function() {
    this.name = 'Eternal Eclipse'
    this.top_speed = '2lyph'
    this.launch = function(name, top_speed) {
        console.log(this.name + ' is launching to infinity and beyond at ' + top_speed
    + '!')
    }
}
var spaceship3 = new spaceship3
spaceship3.launch('Eternal Ecplise', '2lpyh')

class NewSpaceship {
    constructor() {
        this.name = 'Rainbow Road'
        this.top_speed = '2.5lyph'
    }
    launch(name, top_speed) {
        console.log(this.name + ' is launching to infinity and beyond at ' + top_speed
    + '!')
    }
}
var spaceship4 = new NewSpaceship
spaceship4.launch('Rainbow Road', '2.5lyph')
