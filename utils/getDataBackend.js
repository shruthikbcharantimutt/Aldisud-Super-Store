import axios from "axios";
export const fetchData = async () => {
  const response = await axios.get("http://localhost:5000/api/data");
  
  return response.data;
};

export const writeToExcel = async () => {
  let data = {
    Name: ["John", "Anna", "Peter", "Linda"],
    Age: [28, 35, 29, 42],
    City: ["New York", "Paris", "Berlin", "London"],
  };
  const response = await axios.post(
    "http://localhost:5000/api/write_to_excel",
    data
  );
  
  return response.data;
};
