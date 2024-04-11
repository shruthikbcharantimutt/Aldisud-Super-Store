import { read, utils } from "xlsx";
async function getData() {
  const url = "http://localhost:3000/Superstore1.xls";

  const response = await fetch(url);
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await response.arrayBuffer();
  const workbook = read(data,{cellDates: true,
  });

  let responseData = {};
  workbook.SheetNames.forEach((sheet, index) => {
    const sheetData = workbook.Sheets[workbook.SheetNames[index]];
    const sheetJson = utils.sheet_to_json(sheetData);
    responseData[sheet] = Object.values(sheetJson);
  });
  
  return responseData;
}
export default getData;
