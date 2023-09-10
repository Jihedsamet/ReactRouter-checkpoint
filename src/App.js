
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home";
import MovieList from "./Components/MovieList";
import MovieDetails from './Components/MovieDetails';




function App() {
  return (
    <div>
 <BrowserRouter>

 <Routes>
 <Route path ="/" Component ={Home}/>
 <Route path= "/MovieList" Component= {MovieList}/> 
 <Route path ="/Details/:id" Component= {MovieDetails}/>
 
 </Routes>
 </BrowserRouter>    

    </div>
  );
}

export default App;
