import { Box,Center,Stack, Square, Text } from "@chakra-ui/layout"
import {Tabs,TabList,Tab,TabPanels,TabPanel, Flex,Image,Divider , InputLeftElement,InputGroup,InputRightElement,Input} from "@chakra-ui/react"
import {useState} from "react"

const Navbar2=()=>{
    const [isShown,setIsShown]=useState<Boolean>(false)
    return <div  onMouseEnter={() => setIsShown(true)}
    onMouseLeave={() => setIsShown(false)} >Navbar 2
    {isShown&& <h1>showed</h1>}
    </div>
}
export default Navbar2