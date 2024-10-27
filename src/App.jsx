import React, { useContext, useEffect ,useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  useEffect(()=>{
     setLocalStorage();
    //  getLocalStorage();
  },)
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const data = useContext(AuthContext);

  // useEffect(() => {
  //   if(data){
  //     const loggedInUser= localStorage.getItem("loggedInUser");
  //     if(loggedInUser){
  //       setUser(loggedInUser.role);
  //     }
  //   }
  // },[data] )
  
  // console.log(data);

  const handleLogin = (email ,password)=>{
      if(data) {
        const admin=data.admin.find((e)=>email==e.email && password==e.password);
        if(admin){
        setUser({role : "admin"});
        setLoggedInUserData(admin);
        localStorage.setItem('loggedInUser',JSON.stringify({role: 'admin'}))
        }
        else if(data)
        {
        const employee=data.employees.find((e)=>email==e.email && password==e.password)
        if(employee){
        setUser({role :"employee"})
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser',JSON.stringify({role: 'employee'}))
        } 
       }
     }
      else{
        alert("invalid credentials");
      }
     // console.log(JSON.stringify(loggedInUserData));
  }
  
   
  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : (
        <>
          {user.role === 'employee' ? <EmployeeDashboard data={loggedInUserData}/> : <AdminDashboard data={loggedInUserData}/>}
        </>
      )}
    </>
  );
};
export default App
