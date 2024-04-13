import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddNewSales = ({getFormData}) => {
  // State variables to hold form data
  const [formData, setFormData] = useState({
    "Row ID": 849,
    "Order ID": "",
    "Order Date": "2021-12-31T23:00:00.000Z",
    "Ship Date": "2022-01-05T23:00:00.000Z",
    "Ship Mode": "Standard Class",
    "Customer ID": "GA-14725",
    "Customer Name": "",
    "Segment": "Consumer",
    "Country/Region": "United States",
    "City": "Lorain",
    "State": "Ohio",
    "Postal Code": 44052,
    "Region": "East",
    "Product ID": "FUR-FU-10003878",
    "Category": "",
    "Sub-Category": "Furnishings",
    "Product Name": "Linden 10\" Round Wall Clock, Black",
    "Sales": "",
    "Quantity": 4,
    "Discount": 0.2,
    "Profit":""
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
     <Form.Group controlId="Order ID">
        <Form.Label>Order Id</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Order Id"
          name="Order ID"
          value={formData["orderId"]}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="Customer Name">
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter customer name"
          name="Customer Name"
          value={formData["Customer Name"]}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="Category">
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter category"
          name="Category"
          value={formData["Category"]}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="Sales">
        <Form.Label>Sales</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Sales"
          name="Sales"
          value={formData["Sales"]}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="Profit">
        <Form.Label>Profit</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Profit"
          name="Profit"
          value={formData["Profit"]}
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
