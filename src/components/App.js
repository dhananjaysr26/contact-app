import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
//import './App.css';
import {uuid} from "uuidv4";
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetails from "./ContactDetails";
function App() {
//   const Contacts=[
//     {id:"1",
//      name:"Dhananjay Singh",
//      email:"dhananjaysr26@gmail.com"
//    },
//    {id:"2",
//    name:"Shivam Singh",
//    email:"oyeshivam1@gmail.com"
//  },
//   ];

const LOCAL_STORANGE_KEY="contacts";
const [contacts,setContacts]=useState([]);
const addContactHandler=(contact)=>{
  console.log(contact);
  setContacts([ ...contacts,{id:uuid(),...contact}]);

}
const removeContactHandler=(id)=>{
  const newContactList=contacts.filter((contact)=>{
    return contact.id !==id;
  });
  setContacts(newContactList);
};
//For getting contacts from local storage
useEffect(()=>{
  const retriveContacts=JSON.parse(localStorage.getItem(LOCAL_STORANGE_KEY,JSON.stringify(contacts)));
  if(retriveContacts) setContacts(retriveContacts);
},[]);

useEffect(()=>{
  localStorage.setItem(LOCAL_STORANGE_KEY,JSON.stringify(contacts));
},[contacts]);


  return (
    <div className="ui container">
    <Router>
      <Header/>
      <Switch>
      <Route path="/" exact render={(props)=>(<ContactList {...props} contacts={contacts}getContactId={removeContactHandler} />)}/>
      <Route path="/add" render={(props)=>(<AddContact {...props} addContactHandler={addContactHandler} />)}/>
      <Route path="/contact/:id" component={ContactDetails}/>
      </Switch>
      {/*<AddContact addContactHandler={addContactHandler} />
  <ContactList contacts={contacts} getContactId={removeContactHandler} />*/}
  
      </Router>
    </div>
  );
}

export default App;
