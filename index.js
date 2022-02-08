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