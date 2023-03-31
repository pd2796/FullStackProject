import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {
  BrowserRouter as Router,
  Route,Routes
} from 'react-router-dom'
import AddEmployeeComponent from './components/AddEmployeeComponent';
function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container"> 
        <Routes>
          <Route exact path="/" Component={ListEmployeeComponent}></Route>
          <Route path="/employees" Component={ListEmployeeComponent}></Route>
          <Route path="/add-employee" Component={AddEmployeeComponent}></Route>
          <Route path="/edit-employee/:id" Component={AddEmployeeComponent}></Route>

        </Routes>       
        </div>

        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
