// this is me going over how to use js classes all over again
// with the help of chatgpt yeps

// class declaration

class first_class {
    // class properties and methods would go here

    constructor(power, skill, knowledge, rank, weapons) {
        this.knowledge = knowledge 
        this.power = power
        this.skill = skill
        this.weapons = weapons
        this.rank = ranks
    }

    show_power() {
        // method logic here
        console.log("power is: ", this.power)
    }

    show_skill() {
        console.log("skilled in: " this.skill ) // magic, combat, building, healing
    }
}