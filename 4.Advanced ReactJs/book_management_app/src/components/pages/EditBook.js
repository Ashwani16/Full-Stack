import { Box, Button, FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { UpdateData } from "../../redux/book/action";
import Navbar from "../Navbar";
export default function EditBook(){
    const {id}=useParams()
    const books=useSelector((state)=>state.bookReducer.books)
    const book=books.find((e)=>e.id==id)
    const [book_name,setName]=useState(book.book_name)
    const [author,setAuthor]=useState(book.author)
    const [cover_photo,setCover_photo]=useState(book.cover_photo)
    const dispatch=useDispatch(book_name,author);
    const navigate=useNavigate()
    const clickHandler=()=>{
        dispatch(UpdateData({book_name,author,cover_photo},id)).then(()=>{
            navigate("/")
        }).catch(()=>{
            alert('somethink went wrong ...try again')
        })
    }
    return <><Navbar/>
    <Box maxW='sm' margin="auto" borderWidth='1px' borderRadius='lg' overflow='hidden'>
        
        <FormControl>
  <FormLabel>Edit Book Page</FormLabel>
  <FormHelperText>Book Name</FormHelperText>
  <Input onChange={(e)=>{setName(e.target.value)}} value={book_name}/>
  <FormHelperText>Author Name</FormHelperText>
  <Input onChange={(e)=>{setAuthor(e.target.value)}} value={author}/>
  <FormHelperText>Image Link</FormHelperText>
  <Input onChange={(e)=>{setCover_photo(e.target.value)}} type="link" value={cover_photo}/>
  
  <Button onClick={clickHandler}>Update</Button>
</FormControl>
</Box>
</> 
        {/* <div>
            <label>Book Name</label>
            <input onChange={(e)=>{setName(e.target.value)}} value={book_name}/><br/>
            <label>Book's Author</label>
            <input onChange={(e)=>{setAuthor(e.target.value)}} value={author}/><br/>
            <button onClick={clickHandler}>Update</button>
        </div> */}
   
}