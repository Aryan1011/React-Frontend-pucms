import './App.css';
import Child from './components/Child';
import {
  Route,
  Routes
} from "react-router-dom";
import Create from './components/Create';
import Home from './components/Home';
import Edit from './components/Edit';
import Complaints from './components/Complaints';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Modular from './components/homeComponents/Modular'
import News from './components/homeComponents/News'
import { useState ,useEffect } from 'react';
function App() {
  const [boolUser,setBoolUser]=useState(false);
  const [user,setUser] = useState("");

  const preserveData =  () =>{
    if(!user){
      return ;
    }
    sessionStorage.setItem('user',JSON.stringify(user));
  }

  useEffect(() => {
    preserveData();
  }, [user]);

  useEffect(() => {
    const localUser = JSON.parse(sessionStorage.getItem('user'));
    if(localUser){
      setBoolUser(true);
      setUser(localUser);
      console.log(user);
      console.log(localUser)
    }
  }, [])

  return (
    <div className="App">

      <Navbar boolUser={boolUser} setBoolUser={setBoolUser} setUser={setUser} user={user} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/reach" element={<Modular />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/stories" element={<Modular />} />
          {/* <Route path="/login" element ={boolUser ? <Navigate to="/"/> : <Login setUser = {setUser} setBoolUser={setBoolUser}/>}/> */}
          <Route path="/complaint" element={!boolUser ? <></>:<Complaints/>} />
          <Route path="/create" element={!boolUser ? <></> :<Create user={user} />} />
          <Route path='/complaint/:id' element={!boolUser ? <></>:<Child user={user} />} />
            <Route path ='/complaint/edit/:id' element={!boolUser ? <></>: <Edit/>} />
        </Routes> 
        <Footer/>  
      
    </div>
  );
}
export default App;
