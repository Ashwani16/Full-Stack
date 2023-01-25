import { Box,Center,Stack, Square, Text } from "@chakra-ui/layout"
import {Tabs,TabList,Tab,TabPanels,TabPanel, Flex,Image,Divider , InputLeftElement,InputGroup,InputRightElement,Input} from "@chakra-ui/react"
import {useState} from "react"
import Bags from "./Navbar2/Bags"
import Beauty_Health from "./Navbar2/Beuauty&Health"
import Electronics from "./Navbar2/Electronics"
import Home_Kitchen from "./Navbar2/Home&Kitvhen"
import Jewellery from "./Navbar2/Jawellery&Acc"
import Kids from "./Navbar2/Kids"
import Men from "./Navbar2/Men"
import WomenEthnic from "./Navbar2/WomenEthnic"
import WomenWestern from "./Navbar2/WomenWestern"

const Navbar2=()=>{
    const [isvisible,setIsvisible]=useState(<></>)
   return <div onMouseLeave={()=>{setIsvisible(<></>)}}>
        <div  className="flex nav2">
            <div onMouseEnter={()=>{setIsvisible(<WomenEthnic/>)}} >Women Ethnic</div>
            <div onMouseEnter={()=>{setIsvisible(<WomenWestern/>)}}> Women Western</div>
            <div onMouseEnter={()=>{setIsvisible(<Men/>)}}>Men</div>
            <div onMouseEnter={()=>{setIsvisible(<Kids/>)}}>Kids</div>
            <div onMouseEnter={()=>{setIsvisible(<Home_Kitchen/>)}}>Home & Kitchen</div>
            <div onMouseEnter={()=>{setIsvisible(<Beauty_Health/>)}}>Beauty & Health</div>
            <div onMouseEnter={()=>{setIsvisible(<Jewellery/>)}}>Jewellery Accessories</div>
            <div onMouseEnter={()=>{setIsvisible(<Bags/>)}}>Bags & Footwear</div>
            <div onMouseEnter={()=>{setIsvisible(<Electronics/>)}}>Electronics</div>
        </div>
        <Divider />
       {isvisible}
    </div>
}
export default Navbar2