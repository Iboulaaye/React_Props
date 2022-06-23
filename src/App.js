import React from 'react';
import './App.css';
import  Component  from 'react';
import Profile from './Profile/profile';
import myImage from "./Profile/myImage.webp";



function App () {
  const handleClick = e => {
    e.preventDefault();
    alert("Amadou Diop");
  };
  return (
    <div className="App"  style={{margin:"80px 100px",fontSize:"1.2rem", display: "inline" }}>
      <Profile FullName ="Amadou DIOP"  bio =" Age de 22 ans, Je suis actuellement  etudiant en developpement web. Je suis passsioné par les nouvelles technologies " profession = "Etudiant" > 
        <img src={myImage} alt ='myprofilepic'  className='img1' width="190px"/>
      </Profile>
      <a href ="/" onClick={e => handleClick(e)} style={{width:50, marginLeft:40, border:"solid"}}>
        Click me
      </a>  
    </div>
  );
};

export default App;
