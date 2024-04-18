import axios from "axios";
export const fetchData = async () => {
  const response = await axios.get("http://localhost:5000/api/data");
  
  return response.data;
};

export const writeToExcel = async (data) => {
  
  const response = await axios.post(
    "http://localhost:5000/api/write_to_excel",
    data
  );
  
  return response.data;
};
