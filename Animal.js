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

}