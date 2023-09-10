// this is me going over how to use js classes all over again
// with the help of chatgpt yeps

// class declaration

class first_class {
    // class properties and methods would go here

    constructor(name, power, skill, knowledge, rank, weapons) {
        this.name = name
        this.knowledge = knowledge 
        this.power = power
        this.skill = skill
        this.weapons = weapons
        this.rank = rank
    }

    show_power() {
        // method logic here
        console.log(this.name, "power is: ", this.power)
    }

    show_skill() {
        console.log(this.name, "is skilled in: ", this.skill ) // magic, combat, building, healing
    }
}

// creating instances

const barb1 = new first_class('barb1', 'flight', 'healing', 0.4 , 24 , 23 )
const barb2 = new first_class('barb2', 'firebreathing', 'combat' , 0.2 , 8 , 5)

// Accessing properties and methods

console.log(barb1.power)
console.log(barb2.power)

barb1.show_power()

barb2.show_skill()

// you can console log the newly formed objects

console.log(barb2)

class scholar {
    constructor(name, method, know_capacity, var_knowledge ){
        this.name = name 
        this.method = method
        this.know_capacity = know_capacity
        this.var_knowledge = var_knowledge

    }

    get_info(person){
        let varia = person
        console.log(varia, "got your info")
    }

}

class teacher extends scholar {
    
}

const sam = new scholar("sam", "fusion", 45 , 3)
sam.get_info(barb1)



class warrior {

}

class inventor {

}

class public_worker {

}

class politician {

}