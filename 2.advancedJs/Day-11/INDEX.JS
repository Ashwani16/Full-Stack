function signup(){
    let userName=document.querySelector("#userName").value;
    let password=document.querySelector("#password").value;
    let s;
    if(document.querySelector("#userType").value=="student"){
        s=new student();
        s.signup(userName,password)
    }else{
        s=new admin();
        s.signup(userName,password)
    }
    s.display()
    window.location.href="sign.html"
}
class admin{
    constructor(){

    }
    display(){
        console.log(this.userName,this.password)
    }
    signin(userName,password){
        this.userName=userName
        this.password=password
    }
    signup(userName,password){
        let valid=this.validUser(userName)&&this.validPassword(password)
        if(valid){
            this.userName=userName
            this.password=password
            let admins=JSON.parse(localStorage.getItem("admins"))||[]
            admins.push(this)
            localStorage.setItem("admins",JSON.stringify(admins))
           // window.location.href="./sign.html"
        }else{
            alert("username shoud have '.admin' and pass should be '0000' char.")
        }
    }
    validUser(userName){
        return userName.includes(".admin")?true:false;
    }
    validPassword(password){
        return password.includes("0000")?true:false;
    }
}
class student{
    constructor(){
    }
    display(){
        console.log(this.userName,this.password)
    }
    signin(userName,password){
        this.userName=userName
        this.password=password
    }
    signup(userName,password){
        let valid=this.validUser(userName)&&this.validPassword(password)
        if(valid){
            this.userName=userName
            this.password=password
            let students=JSON.parse(localStorage.getItem("students"))||[]
            students.push(this)
            localStorage.setItem("students",JSON.stringify(students) )
           // window.location.href="./sign.html"
        }else{
            alert("username shoud have '@' and pass should be at-least 8 char.")
        }
    }
    validUser(userName){
        return userName.includes("@")?true:false;
    }
    validPassword(password){
        return password.length>7?true:false;
    }

}
function signin(){
    let userName=document.querySelector("#userName").value;
let password=document.querySelector("#password").value;
let user;
let target;
    if(userName.includes(".admin")&& password.includes("0000")){
        let admins=JSON.parse(localStorage.getItem("admins"))||[]
        admins.forEach(element => {
            if(element.userName==userName && element.password==password){
                user=new admin()
                target="./admin.html"
            }
        });
    }else{
        let students=JSON.parse(localStorage.getItem("students"))||[]
        students.forEach(element => {
            if(element.userName==userName && element.password==password){
                user=new student();
                target="./student.html"
            }
        });
    }
    if(user==undefined){
        alert("wrong credentials");
    }else{
        console.log(user);
        user.signin(userName,password);
        localStorage.setItem("user",JSON.stringify(user));
        window.location.href=target;
    }
}