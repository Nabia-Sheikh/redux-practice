import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch } from 'react-redux';

const AddItem = () => {
    const [title , setTitle] = useState();
    const [prize , setPrize] = useState();
    const dispatch = useDispatch();
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(title);
        const result = {title , prize}
        dispatch(addBook(result))
    }
    return (
        <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Add Book Title</Form.Label>
    <Form.Control type="text"value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Enter Book Title" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Add Auther Name</Form.Label>
    <Form.Control type="" placeholder="Enter Auther Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Add Prize</Form.Label>
    <Form.Control type="" placeholder="Enter Prize" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    )
}

export default AddItem
