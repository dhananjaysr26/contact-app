import React from 'react';
import {Link} from 'react-router-dom';
import userPic from '../image/user.png';

const ContactCard=(props)=>{
    const {id ,name,email}=props.contact;
    return(
        <div className="item">
            <img className="circular ui tiny avatar image" src={userPic} alt="user"></img>
        <div className="content">
        <Link to={{pathname:"/contact/${id}",state:{contact:props.contact}}}>
            <div className="header" style={{color:"Black" }}>{name}</div>
            <div>{email}</div>
        </Link>
        </div>
        <i className="circular large trash icon" style={{color:"red" ,marginLeft:"1000px"}}
        onClick={()=> props.clickHandler(id)}></i>
    </div>

    );
     
};
export default ContactCard;