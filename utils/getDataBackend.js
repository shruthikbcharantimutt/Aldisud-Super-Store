import axios from "axios";
const fetchData= async ()=>{
  //const response1 = await fetch("http://localhost:5000/api/data");
  //const movies = await response1.json();
  //console.log(movies);
  const response=await axios.get("http://localhost:5000/api/data");
  console.log(JSON.stringify(response.data))
   return response.data
}




export default fetchData;
