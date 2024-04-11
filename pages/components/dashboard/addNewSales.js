import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddNewSales = ({getFormData}) => {
  // State variables to hold form data
  const [formData, setFormData] = useState({
    orderId: '',
    customerName:'',
    category:'',
    sales: '',
    profit: '',
  });

  // Event handler for form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  //  console.log('Form data:', formData);
    getFormData(formData)
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, e.g., submit to backend or perform validation
    //console.log('Form data:', formData);
    // Reset the form fields after submission
   /* setFormData({
      firstName: '',
      lastName: '',
      email: '',
    });*/
  };

  return (
    <Form onSubmit={handleSubmit}>
     <Form.Group controlId="orderId">
        <Form.Label>Order Id</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Order Id"
          name="orderId"
          value={formData.orderId}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="customerName">
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter category name"
          name="customerName"
          value={formData.customerName}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="category">
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="sales">
        <Form.Label>Sales</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Sales"
          name="sales"
          value={formData.sales}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="profit">
        <Form.Label>Profit</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter profit"
          name="profit"
          value={formData.email}
          onChange={handleChange}
        />
      </Form.Group>

   
  

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddNewSales;
