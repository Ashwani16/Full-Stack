import './App.css';
import Allroute from './components/allroutes';

function App() {
  // const count =useSelector((store)=>store.count)
  // const dispatcher=useDispatch();
  // useEffect(()=>{
  //   setInterval(()=>{
  //     dispatcher(Add(2))
  //   },1000)
  // },[])
  return (
    <div className="App">
    <Allroute/>
    </div>
  );
}

export default App;
