import { read, utils, writeFile } from "xlsx";

async function addNewRowXLSX(newRowData) {

  const url = "http://localhost:3000/Superstore1.xls";

  const response = await fetch(url);
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await response.arrayBuffer();
  const workbook = read(data);
  const ordersSheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[ordersSheetName];

  utils.sheet_add_aoa(sheet, [Object.values(newRowData)], { origin: -1 });

  writeFile(workbook, url);
}
export default addNewRowXLSX;
/* if (cell) {
    // update existing cell
    cell.v = "YourValue";
  } else {
    // add new cell
    XLSX.utils.sheet_add_aoa(sheet, [["YourValue"]], { origin: cellRef });
  } */
