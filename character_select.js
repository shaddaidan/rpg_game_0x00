// this is a script for the creation and selection of you character
// i would be using js oop paradimg as well as classes
// this would also serve as practice for me.

// first we use an object for the character creation.

let char = {
    name : "smith" ,
    specie : "ogun" ,
    rank : 23 ,
    boost : [1,2,3,4,5], 
    call_out : function (ref){
        console.log(char[ref])
    } ,
    rank_boost : function(n){
        let boost = this.rank * this.boost[n]
        console.log(boost)

    } ,
}

console.log(char["rank"])
console.log(char.rank_boost(3))