import React,{useState , useEffect} from 'react'
import axios from "axios";
import "./Table.css";
import{Link,BrowserRouter} from 'react-router-dom';
import {BrowseRouter as route} from 'react-router-dom';
import {Button, Modal, ModalBody } from "react-bootstrap";
import AddQuestion from './AddQuestion';

const Table = () =>{
    const [show, setShow] = useState(true);
   const handleShow= () => setShow(true);
   const handleClose =() =>setShow(false);
      const [questions, setQuestion]= useState([]);

      useEffect(() => {
          loadQuestions();
      }, []);
    
   const loadQuestions = async ()=>{
       const result = await axios.get("http://localhost:3001/questions");
       setQuestion(result.data);
   };
   
    return (
        <div>
             <h2>Mockup</h2>
       <div className="topic">
       <Button onClick={handleShow} className="btn btn-success " data-toggle="modal"><i className="material-icons">&#xE147;</i><span> Add Question</span></Button>
        <p className="topic1">FAQ Manager - iLabs</p>
       
        <table class="table">
        <thead>
       <tr>
      <th  class ="th"scope="col">#</th>
      <th  class="th" scope="col">Question</th>
      <th  class="th" scope="col">Category</th>
      <th  class="th"scope="col">Status</th>
      <th  class="th">Action</th>
    </tr>
  </thead>
  <tbody>
      {questions.map((que,index) => (
     <tr>
         <th scope ="row">{index +1 }</th>
         <td>{que.q}</td>
         <td>{que.category}</td>
         <td>{que.status}</td>
         <td>
        <BrowserRouter>
        <Link class="btn btn-primary">View</Link>
        <Link class="btn btn-secondary">Edit</Link>
        <Link class="btn btn-danger">Delete</Link>
        <Link class="btn btn-info">Deactivate</Link>
        
       
        </BrowserRouter>
         

        
       </td>
         </tr>
        
   
        ) )}
        
            </tbody>
            </table>

           

        <p className="footer">copyright @ iLabs, All Rights Reserved</p>
        <p className="footer-end">@Privacy Policy | Terms Of Service | Help Center</p>
        
        </div>
        <Modal show={show} onHide={handleClose} closeButton>
            <Modal.Header>
            <Modal.Title>
            Add Question
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <AddQuestion/>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close Button</Button>
            </Modal.Footer>
            </Modal>
      
       </div>
    );
};

export default Table;

