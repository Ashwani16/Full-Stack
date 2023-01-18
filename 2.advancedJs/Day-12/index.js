class parkingLot{
     #isAva
    constructor(type){
        this.type=type;
        this.#isAva=true;
    }
    get isAva(){
        return this.#isAva
    }
    set isAva(value){
        this.#isAva=value;
    }
}
// let n=new parkingLot("car")
// console.log(n.isAva)
// n.isAva=false
// console.log(n)
class parkingFloor{
    constructor(n){
        this.length=n;
        this.floor=[];
        for(let i=0;i<n;i++){
            let type="bike"
            if(i==0){
                type="truck"
            }
            if(i==1){
                type="car"
            }
            this.floor.push(new parkingLot(type))
        }
    }

}
// let floor=new parkingFloor(3)
// console.log(floor)
class parkingSlot{
    constructor(n,m){
        this.n=n;
        this.m=m;
        this.slot=[];
        for(let i=0;i<n;i++){
            this.slot.push(new parkingFloor(m))
        }
    }
    check(type){
       for (let j=0;j<this.n;j++) {
            for (let i=0;i<this.m;i++) {
                //console.log(this.slot[j].floor[i])
                if((this.slot[j].floor[i].type==type) && this.slot[j].floor[i].isAva){
                    this.slot[j].floor[i].isAva=false;
                    return new Ticket(type,j,i)
                }
            }
       }
    }
}
class Vehicle{
    #type
    constructor(type){
        this.#type=type
    }
    get type(){
        return this.#type
    }
}
class Ticket{
    constructor(type,floor,lot){
        this.type=type;
        this.floor=floor;
        this.lot=lot;
    }
    creatTicket(){
        return `Parking Boked Succesfuly!! vehicle Type is ${this.type} || pot no is ${this.floor}${this.lot}`
    }
}
// let tic=new Ticket('car',2,2)
let parkking=new parkingSlot(3,3)
function book(){
    let value=document.querySelector('select').value;
    let user=new Vehicle(value);
    let final=parkking.check(user.type)
    if(final!=undefined){
        alert(final.creatTicket())
      }else{
        alert("No Space for parking")
      }
}

 
  
  
 
  
  

