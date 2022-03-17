import React, {useState, useEffect} from 'react'
import  axios from 'axios'

const UserList = () => {
const [userList, setUserList] = useState([])
useEffect(()=>{
axios.get("https://jsonplaceholder.typicode.com/users")
.then((res)=>setUserList(res.data))
.catch((err)=>console.error(err))
}, [])
return (<div>
    {console.log(userList)}
    {userList.map(user =>{
        const {name, email,address,website} = user
        return (
       
          <div className="user">
                    <div className="name">
                    <h3>User Name :</h3>  <h3> {name}</h3>
                    </div>
                    <hr/>
                    <div className='name'>
                    {" "}
                    <h3>Email :</h3><h4> {email}</h4>
                    </div>
                
                    <div className="name">
                    <h3>Adress :</h3>  <h4> {address.city}</h4>
                    </div>
                    <div className="name">
                    <h3>Website :</h3> <h4> {website}</h4>
                    </div>
          </div>
          
        );
    })}
    </div>);
  }
  
  export default UserList

