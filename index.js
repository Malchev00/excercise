let sum = 5;
//console.log(sum);

const title3 = "192.168.0.2/255.255.255.0";
//console.log(title3);

let boolean = true // false
//console.log(boolean);

let array = [sum, title3, boolean];
//console.log(array);

let object = {
    sum: 20,
    title3: "titanic",
    boolena: true
}
// console.log(object);


const displayitems = (passedarray) => {

    for (let item of array) {
        console.log(item)
    }
}
displayitems(array)

let data = [
    10,
    12,
    34,
    67,
    5,
    34
    100
]
const filteredArray = data.filter((element:number) => {
    if (element > 34) {
        return element;
    }
})
console.log(filteredArray)

const mappedData=data.map((element:number) => {
    if (element === 67){
        element = 80
    }
    return element
})
//console.log(mappedData)

const foundElement = data.find((element:number) => {
    if (element===34) {
        return element
    }
})

data.map((element:element) =>
    if(element ===5 ) {
        element = 15}
return element
})

console.log(result)

const filteredArraydata.filter((element:number) => {
    if(element >= 10 && element <= 20{
      return element
    }
})
        console.log(filteredArray)