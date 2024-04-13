"use strict";
import React, {
  useMemo,
  useState,
  StrictMode,
  useEffect,
  useLayoutEffect,
} from "react";
import { AgGridReact } from "@ag-grid-community/react";
import "@ag-grid-community/styles/ag-grid.css";
import { Button, Container, Modal, Row, Col } from "react-bootstrap";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { ModuleRegistry } from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import AddNewSales from "./addNewSales";
import { getUniqueElementsByKey } from "../../../utils/common";
import addNewRowXLSX from "../../../utils/addNewRowXLSX";
ModuleRegistry.registerModules([ClientSideRowModelModule]);

const OrdersTable = ({ orders }) => {
  const [rowData, setRowData] = useState([]);
  const [filters, setFilters] = useState({});
  const [newRowData, setNewRowData] = useState(orders);
  const [show, setShow] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [countryOptions, setCountryOptions] = useState(
    getUniqueElementsByKey(rowData, "Country/Region")
  );
  const [stateOptions, setStateOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState(
    getUniqueElementsByKey(rowData, "City")
  );
  console.log(countryOptions, stateOptions, cityOptions);
  const getFormData = (formData) => {
    setNewRowData(formData);
  };
  const filteredBySelection = () => {
    const filteredData = rowData.filter((item) => {
      for (const column in filters) {
        if (filters[column] && item[column] !== filters[column]) {
          return false;
        }
      }
      return true;
    });
    if (Object.keys(filters).length) {
      setRowData(filteredData);
    }
  };
  const handleChange = (e, column) => {
    const { value } = e.target;
    setFilters({ ...filters, [column]: value });
    if (value != "All") {
      filteredBySelection();
    }
    if (column === "State") {
      const values = rowData.map((obj) => {
        if (obj["State"] == value) {
          return obj["City"];
        }
      });
      const uniqueValues = [...new Set(values)];
      setCityOptions(uniqueValues);
    }
  };

  const [columnDefs, setColumnDefs] = useState([
    { field: "Order Date", valueFormatter: (p) => p.value.split("T")[0] },
    { field: "Order ID" },
    { field: "Customer Name" },
    { field: "Country/Region", filter: "agTextColumnFilter" },
    { field: "State", filter: "agTextColumnFilter" },
    { field: "City", filter: "agTextColumnFilter" },
    { field: "Category" },
    { field: "Sales", valueFormatter: (p) => "$" + p.value.toFixed(2) },
    { field: "Discount" },
    { field: "Profit", valueFormatter: (p) => p.value.toFixed(2) + "%" },
  ]);
  useLayoutEffect(() => {
    setRowData(orders);
    setCountryOptions(getUniqueElementsByKey(orders, "Country/Region"));
    setStateOptions(getUniqueElementsByKey(orders, "State"));
    setCityOptions(getUniqueElementsByKey(orders, "City"));
  }, []);
  useEffect(() => {
    setIsMounted(true);

    filteredBySelection();
  }, [filters]);

  const defaultColDef = useMemo(() => {
    return {
      //filter: 'agTextColumnFilter',
      //floatingFilter: true,
    };
  }, []);

  const addNewRow = () => {
    console.log("newRowData", newRowData);
    addNewRowXLSX(newRowData)
    if (!rowData.map(obj => obj["Order ID"]).includes(newRowData["Order ID"])) {
      setRowData([...rowData, newRowData]);
    }else{
      alert("Item with this Order Id is already created")
    }

    handleClose();
  };

  return (
    <>
      {isMounted && (
        <Container>
          <h1>Sales Data</h1>
          <Row>
            {countryOptions.length && (
              <Col>
                {" "}
                <label htmlFor="country">Country:</label>
                <select
                  id="country"
                  onChange={(e) => handleChange(e, "Country/Region")}
                >
                  <option value="All">All</option>
                  {countryOptions?.map((country) => {
                    return <option value={country}>{country}</option>;
                  })}
                </select>
              </Col>
            )}

            <Col>
              {" "}
              {stateOptions.length && (
                <Col>
                  {" "}
                  <label htmlFor="state">State:</label>
                  <select id="state" onChange={(e) => handleChange(e, "State")}>
                    <option value="All">All</option>
                    {stateOptions?.map((state) => {
                      return <option value={state}>{state}</option>;
                    })}
                  </select>
                </Col>
              )}{" "}
            </Col>
            <Col>
              {" "}
              {cityOptions.length && (
                <Col>
                  {" "}
                  <label htmlFor="city">City:</label>
                  <select id="city" onChange={(e) => handleChange(e, "City")}>
                    <option value="All">All</option>
                    {cityOptions?.map((city) => {
                      return <option value={city}>{city}</option>;
                    })}
                  </select>
                </Col>
              )}{" "}
            </Col>
          </Row>
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
              <Modal.Body>
                <AddNewSales getFormData={getFormData} />
              </Modal.Body>
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
};
export default OrdersTable;
