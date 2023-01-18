import { Box, ButtonGroup, Flex, Heading, Spacer } from "@chakra-ui/react"
import {Link} from "react-router-dom"
import style from "../style/navbar.module.css"
export default function Navbar(){

    return <Flex bg='blue.300' minWidth='max-content' alignItems='center' gap='5'>
  <Box p='2'>
    <Heading size='md'>Book ManageMent App</Heading>
  </Box>
  <Spacer />
  <ButtonGroup gap='2'>
  <Link to="/">Home Page</Link>
  <Link to="/login">Log In</Link>
  </ButtonGroup>
</Flex>
     
    

}