import { Box, Image } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";

export default function SingleBook(){
    const {id}=useParams()
   
    const books=useSelector((state)=>state.bookReducer.books)
    
    const book=books.find((e)=>e.id==id)
    return <div>
        <Navbar/>
       
        {book&&<Box maxW='sm' margin="auto" centerContent={true} marginTop="30px" borderWidth='1px' borderRadius='lg' overflow='hidden'>

            <Image width="100%" src={book.cover_photo?book.cover_photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTBlzIeHEumKdxF16MIu5pObLNTyVR7-l-9Q&usqp=CAU"} />
            <h3>{book.book_name}</h3>
                <p>reales--{book.release_year}</p>
                <p>Category- {book.category}</p>
                </Box>
                
        }
        

    </div>
}