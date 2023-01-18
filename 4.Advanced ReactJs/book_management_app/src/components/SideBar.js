import { Box, Radio, RadioGroup, Stack, Checkbox,CheckboxGroup, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import style from "../style/sidebarr.module.css"
export default function SideBar(){
    const [useparms,setSerchparms]=useSearchParams();
const [sort,setSort]=useState(useparms.get("sort"))
const [params,setParams]=useState(useparms.getAll("category"))
function onChangeHandler(e){
    //console.log(e.target.value)
       if(params.includes(e.target.value)){
        setParams((para)=>para.filter((d)=>d!=e.target.value))
       }else{
        setParams([...params,e.target.value])
       }
}
function sortHandler(e){
  
    setSort(e.target.value)
}
useEffect(()=>{
    let obj={
        category:params,
        sort:sort||[]
    }
    setSerchparms(obj)

},[params,sort])
    return <Box bg='green.50' padding="20px" maxW='sm' width='25%' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <h3>Choose Category</h3>
<CheckboxGroup margin="auto"  colorScheme='green' defaultValue={['naruto', 'kakashi']}>
  <Stack margin="auto" spacing={[1, 5]} >
    <Checkbox onChange={onChangeHandler} checked={params.includes("Novel")} value="Novel" type="checkbox" >Novel</Checkbox>
    <Checkbox onChange={onChangeHandler} checked={params.includes("Science_Fiction")} value="Science_Fiction" type="checkbox">Science_Fiction</Checkbox>
    <Checkbox onChange={onChangeHandler} checked={params.includes("Thriller")} value="Thriller" type="checkbox">Thriller</Checkbox>
    <Checkbox onChange={onChangeHandler} checked={params.includes("Motivational")} value="Motivational" type="checkbox">Motivational</Checkbox>
  </Stack>
</CheckboxGroup>
<br/><br/><br/>
        {/* <label>Novel</label>
        <input onChange={onChangeHandler} checked={params.includes("Novel")} value="Novel" type="checkbox" /><br/>
        <label>Science_Fiction</label>
        <input onChange={onChangeHandler} checked={params.includes("Science_Fiction")} value="Science_Fiction" type="checkbox" /><br/>
        <label>Thriller</label>
        <input onChange={onChangeHandler} checked={params.includes("Thriller")} value="Thriller" type="checkbox" /><br/>
        <label>Motivational</label>
        <input onChange={onChangeHandler} checked={params.includes("Motivational")} value="Motivational" type="checkbox" /><br/>
        <br/><br/><br/> */}
        {/* <div onChange={sortHandler}>
        
        <input type="radio" value="asc" defaultChecked={sort=="asc"} name="sort"/>
        <label>Asending</label>
        <input type="radio" value="desc" defaultChecked={sort=="desc"} name="sort" />
        <label>Dessending</label>
        </div> */}
        <RadioGroup defaultValue='2'>
  <Stack margin="auto" onChange={sortHandler} spacing={5} direction='row'>
    <Radio colorScheme='purple' type="radio" value="asc" defaultChecked={sort=="asc"} name="sort">
    Asending
    </Radio>
    <Radio type="radio" value="desc" defaultChecked={sort=="desc"} name="sort" colorScheme='purple'>
    Dessending
    </Radio>
  </Stack>
</RadioGroup>
        
        </Box>
    
}