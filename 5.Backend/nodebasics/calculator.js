console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);
//┌─────────┬─────┬─────┐
//│ (index) │  a  │  b  │
//├─────────┼─────┼─────┤
//│    0    │  1  │ 'Y' │
//│    1    │ 'Z' │  2  │
//└─────────┴─────┴─────┘

const argument=process.argv
console.log(argument)
switch(argument[2]){
    case("add"):{
        console.log(+argument[3]+(+argument[4]))
        break;
    }
    case("sub"):{
        console.log(+argument[3]-(+argument[4]))
        break;
    }
    case("mult"):{
        console.log(+argument[3]*(+argument[4]))
        break;
    }
    case("divide"):{
        console.log(+argument[3]/(+argument[4]))
        break;
    }
    case("sin"):{
        console.log(Math.sin(+argument[3]))
        break;
    }
    case("cos"):{
        console.log(Math.cos(+argument[3]))
        break;
    }case("random"):{
        console.log(Math.random())
        break;
    }
    default:{
        console.log("enter valid syntax")
        break;
    }
}