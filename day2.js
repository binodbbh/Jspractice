const days=["Sunday", "Monday", "Tuesday"]
console.log(days[1])

const number=[1,2,3,4]
const no= number.splice(2,1,5,90)
console.log(number)


let content = "Rohit Bhenchod Penchod Ho"
let newContent = content.split(" ")
console.log(newContent)

const animal={
    species: "Mammals",
    lifeSpan: 21
}
console.log(Object.keys(animal))
console.log(Object.values(animal))

//const price=230
//if(price>=1000){
  //  console.log("It is expensive")
//}
//else{
  //  console.log("It is cheap")
//}

const price= 100? "expensive" : "cheap"