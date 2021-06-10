import React from 'react';
import {Link} from 'react-router-dom';
import user from '../image/pic.jpg';

const ContactDetails=(props)=>{
    const {id ,name,email}=props.location.state.contact;
    return(
        <div className="item">
        <div className="ui card centered">
        <div className="image">
        <img src={user} alt="user"/>
        </div>
        <div className="content">
        <div className="header">{name}</div>
        <div className="description">{email}</div>

        </div>
        
        <div className="center-div">
        <Link to="/"><button className="ui button orange center" style={{marginLeft:"50px"}}>Back to Contact List</button>
        </Link>
        </div>
        </div>
    </div>

    );
     
};
export default ContactDetails;