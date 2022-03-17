
import "./App.css";
import UserList from "./UserList";


const App = () => {
  return (
    <div className="app">
       <h1>
         List of Users
       </h1>

      <div className="list"> 
      <UserList/>
      </div>
      
    
    
    </div>
   
  );
};

export default App;
