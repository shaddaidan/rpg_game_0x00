// this is a coursera lesson i am adding to my code to use as practice as i am learning

class Animal {
    constructor(name, energy){
        this.name = name 
        this.energy = energy

    }

    is_active(){
        if (this.energy >= 0) {
            this.energy -= 1
        console.log(this.energy)
        }

        else {
            console.log("energy too low cat about to die")
            this.sleep()
        }
        


    }

    sleep(){
        energy = 10

    }

    get_color(){

        console.log( this.color)

    }
}

class cat extends Animal {
    constructor(sound = "purrr", can_jump = true , can_climb = true , color, energy){
        super(color, energy)
        this.sound = sound 
        this.can_climb =can_climb
        this.can_jump = can_jump
    }

    make_sound(){
        console.log(this.sound)
    }

}