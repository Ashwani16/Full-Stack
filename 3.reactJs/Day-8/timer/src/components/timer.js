import React from "react"
export default function Timer(){
    let [time,setTime]=React.useState(10)
    React.useEffect(()=>{
  

        const id=setInterval(()=>{
            
            setTime((t)=>{
                console.log(t)
                if(t<0){
                    clearInterval(id)
                    return 0
                }
                return t-1;
            });
        },1000)
    },[])
    return (<h1>Time :{time}</h1>);
}