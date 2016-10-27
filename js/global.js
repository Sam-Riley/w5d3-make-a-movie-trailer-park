// 1. Make a class called Trailer that extends Movie
class Trailer extends Movie {

    // 2. Inside the class, add a constructor function that takes two arguments, a name and an id
    constructor(name, id) {

        // 3. Call the parent constructor function using the super function
        //super(name, id)
        super()
        // 4. Assign a name and id instance property to the incoming name and id arguments
        this.name = name
        this.id = id
        // 5. This method will show the button on the screen, no changes necessary
        this.renderButton()
    }
}

// 6. Create four instances of the Trailer class, passing in the name of a film as the first argument and its corresponding YouTube ID as the second argument
// var es350 = new Lexus('ES 350')
// es350.year = 2009
// console.log(es350)

rogueOne = new Trailer('Rogue One', 'frdj1zb9sMY')
redDead2 = new Trailer('Red Dead 2', 'gmA6MrX81z4')
assassinsCreed = new Trailer('Assassins Creed', 'IP3pHwh8kq4')
doctorStrange = new Trailer('Doctor Strange', 'Lt-U_t2pUHI')

//console.log(rogueOne)
