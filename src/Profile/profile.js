import React from "react";
import Component  from "react";



const Profile  = props  => {  
    const myStyle={
        textAlign:"center",
        color:"rgb(9, 30, 90)",
        textTransform: "uppercase",
        fontFamily: 'Roboto Condensed',margin:"auto",
        textDecoration: "green wavy underline",
    }
    Profile.defaultProps= {FullName:'Homo Senegalensis', bio:"rien à mettre", profession:"tiayneur"};
    return ( 
        <div >
            <div style= {myStyle}>
                <p> Nom et prénom : {props.FullName} </p> 
            </div>
            <div style={{border: "4mm ridge rgba(211, 220, 50, .6)", width:"500px", borderRadius:"2%", marginTop:"20px", marginLeft:"400px", backgroundColor: "rgba(255, 255, 128, .5)", textAlign:"center", }}> 
                <p> Bio : {props.bio} </p>
            </div>
            <div style={{textAlign:"center", color:"rgb(50, 30, 90)", fontSize:30}}> 
                <p style={{textDecoration: "green wavy underline"}}> Profession : {props.profession} </p>
            </div>
            {props.children}
        </div>
    );
};

export default Profile; 