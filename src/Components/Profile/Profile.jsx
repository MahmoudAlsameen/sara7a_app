import React, { useState } from 'react';
import styles from './Profile.module.css';
import avatar from '../../images/avatar.png';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import jwtDecode from "jwt-decode";
import axios from "axios";
import { useQuery } from '@tanstack/react-query';

const getMessages= async ()=>{
  let {data} = await axios.get('https://sara7aiti.onrender.com/api/v1/message', {headers:{token:localStorage.getItem('userToken')}})
  console.log('data is : ',data)
return data.allMessages

}

export default function Profile() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [userID, setUserID] = useState("");


  const { data, error, isLoading } = useQuery(
    ["messages", localStorage.getItem("userToken")],
    () => getMessages(localStorage.getItem("userToken"))
  );
console.log("data from use query",data)












const getUserID=()=> {

  if(localStorage.getItem("userToken")){
    let decoded = jwtDecode(localStorage.getItem("userToken"));
    setUserID(decoded.id);
    console.log()
  }else{
    setUserID("")
  }
  }




  return (
    <div>
       <Button variant="btn btn-default-outline my-5 d-block mx-auto" onClick={() => {
        handleShow();
        getUserID();
      }}>
        <i className="fa-solid fa-share"></i> Share
      </Button>
    <div className="container text-center py-5 my-5 text-center">
      <div className="card py-5 mb-5">
        <a>
          <img src={avatar} className="avatar" alt="profile pic" />
        </a>
        <h3 className="py-2">profile name</h3>
        
          {isLoading
  ? <p>There is no messages!</p>
  : data.map((message, index) => (
    <div className="card text-center my-3 mb-3">
    <div className="card-body"><div key={index}>{message.messageContent}</div></div>
        </div>
    ))}
          
        {/* get messages and display by iteration here!! */}
    



      </div>
     
  
      {/* Share profile Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Share link with your friends</Modal.Title>
        </Modal.Header>
        <Modal.Body>{userID ? `${window.location.hostname}:${window.location.port}/message/${userID}` : ""}</Modal.Body>
        <Modal.Footer>
          <Button variant="btn btn-default-outline" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  </div>
  
  );
}
