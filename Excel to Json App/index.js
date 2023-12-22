// Include the xlsx library
const XLSX = require('xlsx');

// Function to convert Excel data to JSON
function excelToJson(filePath) {
  // Read the Excel file
  const workbook = XLSX.readFile(filePath);

  // Choose the first sheet in the workbook
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  // Convert the sheet data to JSON
  const jsonData = XLSX.utils.sheet_to_json(sheet);

  return jsonData;
}

// Example usage
const filePath = '';
const jsonResult = excelToJson(filePath);
console.log(jsonResult);
