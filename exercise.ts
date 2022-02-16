let title: string = "egerre"
let age: number = 10
let boolean: boolean = true

let array:string[] = ["rgrb","teger","ertr"]


type User={
    id: number,
    name:string,
    isActive: boolean
}
let user = {
    id:1,
    name: "rado",
    isActive: true
}

type Movie={
    id: number,
    name:string,
    year: number,
    isActive: boolean
}
let user = {
    id:1,
    name: "rado",
    isActive: true
}




type Smartpfone = {
    id: number,
    screen_size:number,
    memory: number,
    year: number,
    has_haedphone_jack: boolean
}
type Smartpfone = {
    id: 1,
    screen_size:6,
    memory: 128,
    year: 2021,
    has_haedphone_jack: true
}
//console.log(Smartphone.year)

enum CAR_TYPES{
    sedan ="sedan",
    combi="combi",
    cadi="cadi"
}

class Car {
private type: CAR_TYPES;
constructor(){

}
set|Type(Type:CAR_TYPES): void {
    this.type = this.type
}

}
const car=ner Car();
car.setType(CAR_TYPES.sedan)
console.log(car.getType());


enum vw_color_types{
    red="red",
    green="green",
blue="blue",
}
class vw extends Car {
    private color: vw_color_types="" as vw_color_types;
    setcolor(color: vw_color_types): void{
        this.color=color
    }
}
class VW extends Car {
  private color: string = "";


}
const VW = new VW();
vw.setType(CAR_TYPES.combi);
vw.setColor(vw_color_types.blue)
console.log(vw.getColor(),vw.getType())