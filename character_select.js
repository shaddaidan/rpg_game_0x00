// this is a script for the creation and selection of you character
// i would be using js oop paradimg as well as classes
// this would also serve as practice for me.

// first we use an object for the character creation.

// let char = {
//     name : "smith" ,
//     specie : "ogun" ,
//     rank : 23 ,
//     boost : [1,2,3,4,5], 
//     call_out : function (ref){
//         console.log(char[ref])
//     } ,
//     rank_boost : function(n){
//         let boost = this.rank * this.boost[n]
//         console.log(boost)

//     } ,
// }

// console.log(char["rank"])
// console.log(char.rank_boost(3))

// now to use a class

class Char1 {
    constructor(name, specie, rank) {
        
        this.name = name 
        this.specie = specie
        this.rank = rank
        this.boost = [1, 2, 3, 4, 5, 6]
    }

    call_out(ref){
        console.log(this[ref])
    }

    rank_boost(n){
        let boost = this.rank * this.boost[n]
        console.log(boost)

    }

}

const seyi = new Char1("sam", "ogun", 43)

console.log(seyi.name)
seyi.call_out("specie")
seyi.rank_boost(2)