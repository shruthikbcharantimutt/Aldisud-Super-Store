from flask import Flask, request, jsonify
from flask_cors import CORS
from openpyxl import load_workbook
import xlrd
import pandas as pd
import json

app = Flask(__name__)
cors= CORS(app,origins="*")


@app.route('/api/data')
def get_data():
   # xls = pd.read_excel('Superstore1.xls')
    xls = pd.ExcelFile('Superstore1.xls')
    data = {}
    
    for sheet_name in xls.sheet_names:
     
       df = pd.read_excel(xls, sheet_name)
       for col in df.select_dtypes(include=['datetime64']):
          df[col] = df[col].dt.strftime('%Y-%m-%d')
       df_dict = df.to_json(orient='records')
       data[sheet_name] = df_dict
  
   
    json_data = json.dumps(data)
  #  json_data = data.to_json(orient='records')
   
    return json_data
 
@app.route('/api/write_to_excel', methods=['POST'])
def write_to_excel():
    
    # Get data from the request
    data = request.json
   

    # Check if data and excel_file_path are provided
    if not data:
        return jsonify({'error': 'Data and excel_file_path are required.'}), 400

    try:
        # Convert data to DataFrame
        #excel_file_path = 'Superstore1.xlsx'
       

        df = pd.read_excel('Superstore1.xls')
        print(df)
        # Open the Excel file for writing
        df_updated = df.append(data, ignore_index=True)
        df_updated.to_excel("Superstore1.xls", index=False)

        return jsonify({'message': 'Data successfully written to Excel file.'}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

 
if __name__ == '__main__':
    app.run(debug=True)