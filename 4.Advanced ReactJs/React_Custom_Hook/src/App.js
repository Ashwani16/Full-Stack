
import './App.css';
import Button from './Components/Button';
import Image from './Components/Image';
import Todos1 from './Components/Todos1';
import Todos2 from './Components/Todos2';
const initialData=['Task1', 'Task2']
function App() {
  return (
    <>
    <div>
     <Todos1 initialData={initialData}/>
     <Todos2  initialData={initialData}/>
    </div>
    <div >
      <h1>Image</h1>
     <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
  alt="Image"
  width="300px"
  height="250px" />
     <h1>Button</h1>
     <Button colorScheme='white'size='md'variant='solid' />
    </div>
    </>
  );
}

export default App;
