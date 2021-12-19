import Logo from "./Container/Logo";
import AddItem from "./Container/AddItem";
import ListItem from "./Container/ListItem";
import Home from "./Container/Home"
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    {/* <Logo /> */}
   <Router>
        <Routes>
        <Route index element={<Home />}>
          </Route>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/AddItem" element={<AddItem />}> 
          </Route>
          <Route path="/ListItem" element={<ListItem />}>  
          </Route>
        </Routes>
    </Router>
    </>
  );
}

export default App;
