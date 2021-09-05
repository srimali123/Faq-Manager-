import React from "react";
import { Form, Button } from "react-bootstrap"
const AddQuestion = () =>{
    return (
   <Form> 
    <Form.Group>
        <Form.Control
            type="text"
            placeholder="Question *"
            required
            />
    
    </Form.Group>
    <Form.Group>
        <Form.Control
            type="text"
            placeholder="Category *"
            required
            />
    
    </Form.Group>

    <Form.Group>
        <Form.Control
            type="text"
            placeholder="Status *"
            required
            />
    
    </Form.Group>
  <Button variant="success" type="submit" block>
      Add new question
  </Button>
</Form>
    )
}

export default AddQuestion;