import {  Container, Image, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";
import { GetData } from "../redux/book/action";
export default function ShowBooks(){
    const [useparams,setParams]=useSearchParams()
    const location=useLocation()
    
  
    // console.log(useparams.getAll("category"))
    const dispatch=useDispatch();
    const books=useSelector((state)=>{
        return state.bookReducer.books
    })
     
useEffect(()=>{
    const params={category:useparams.getAll("category"),
    _sort:"release_year",
    _order:useparams.get("sort")
    
}
    dispatch(GetData(params))
},[location.search])
    return <SimpleGrid paddingTop='20px' columns={4} spacing={10}>

        {books.length>0&&books.map((e)=>{
            return <Container bg="grey.100" centerContent={true} key={e.id}>
              <Link to={`/books/${e.id}`}>
                  <Image
                     borderRadius='8'
                     boxSize='150px'
                     src={e.cover_photo?e.cover_photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTBlzIeHEumKdxF16MIu5pObLNTyVR7-l-9Q&usqp=CAU'}
                     alt='Dan Abramov'/>
              </Link> 
                <h3>{e.book_name}</h3>
                <p>reales--{e.release_year}</p>
                <p>Category- {e.category}</p>
                
                <Link to={`/books/${e.id}/edit`}><button>Edit</button></Link>
                </Container>
        })}
        </SimpleGrid>
}