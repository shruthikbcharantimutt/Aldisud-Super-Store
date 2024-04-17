from flask import Flask, jsonify
from flask_cors import CORS

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
 
@app.route('/api/data1')
def get_data_Orders():
   # xls = pd.read_excel('Superstore1.xls')
   
    df = pd.read_excel('Superstore1.xls')
    json_data = df.to_json(orient='records')
    data=json.dumps(json_data)
    return data


if __name__ == '__main__':
    app.run(debug=True)