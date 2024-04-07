'use strict';
import React, { useMemo, useState, StrictMode, useEffect } from 'react';
import { AgGridReact } from '@ag-grid-community/react';
import '@ag-grid-community/styles/ag-grid.css';
import {Button,Container,Modal} from 'react-bootstrap';
import '@ag-grid-community/styles/ag-theme-quartz.css';
import { ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import AddNewSales from "./addNewSales"
import addNewRowXLSX from "../../../utils/addNewRowXLSX"
ModuleRegistry.registerModules([ClientSideRowModelModule]);


const OrdersTable = ({orders}) => {
  const [rowData, setRowData] = useState(orders);
  const [newRowData, setNewRowData] = useState(orders);
  const [show, setShow] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getFormData = (formData) => {
    setNewRowData(formData)
   };
  const [columnDefs, setColumnDefs] = useState([
    { field: "Order ID"},
    { field: "Customer Name"},
    { field: "State"},
    { field: "Category"},
    { field: "Sales",valueFormatter: p => "$"+ (p.value).toFixed(2)},
    { field: "Discount"},
    { field: "Profit" ,valueFormatter: p =>  (p.value).toFixed(2) +"%"},
    
  ]);
useEffect(()=>{
    setIsMounted(true)
},[])
  
  const defaultColDef = useMemo(() => {
    return {
    //filter: 'agTextColumnFilter',
    //floatingFilter: true,
    }
  }, []);
  
  const addNewRow = () => {
    addNewRowXLSX()
    setRowData([...rowData, newRowData]);
    handleClose()
  };

  return (
    <>
    {isMounted && (
        <Container>
             <h1>Sales Data</h1>
         <div className="ag-theme-quartz  my-10" style={{ height: 500 }}>
             
             <AgGridReact
               rowData={rowData}
               columnDefs={columnDefs}
               defaultColDef={defaultColDef}
               rowSelection="multiple"
               suppressRowClickSelection={true}
               pagination={true}
               enableCellTextSelection={true}
               paginationPageSize={50}
               paginationPageSizeSelector={[10, 25, 50]}
             />
             <Button variant="info" onClick={handleShow}>
             Add New Sales Data
           </Button>
     
           <Modal show={show} onHide={handleClose}>
             <Modal.Header closeButton>
               <Modal.Title>Modal heading</Modal.Title>
             </Modal.Header>
             <Modal.Body><AddNewSales getFormData={getFormData}/></Modal.Body>
             <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                 Close
               </Button>
               <Button variant="primary" onClick={addNewRow}>
                 Save Changes
               </Button>
             </Modal.Footer>
           </Modal>
         </div>
        </Container>
        
    )}
    
    </>
   
  );
}
export default OrdersTable;


