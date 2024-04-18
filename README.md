# Aldisud-Super-Store
Sample Super store application

Technologies used:
JavaScript
NextJS
ReactJS
Python
Python Pandas 
I have used recharts for generating graphs and react-ag-grid for data tables.

NextJS is used for routing and data fetching.
This is Simple application with 3 pages
1.Home Page.
  It gives the overview of latest data.I have consider 2022 year's data.
  Using python panda, I have writen a API which will read the excel data converts into JSON and returns it as response.
  
  Once I have the JSON response I am destructing the data based on sheets in excel, and consider order data and drawing the graphs for following fields:
    Graph1: Months in 2022 v/s Total Sales of particular month
    Graph2: Months in 2022 v/s Total Profit of particular month
    Graph3: Months in 2022 v/s Average Profit Ratio of particular month
            Profit ratio=Profit/Sales*100
    Graph4: Months in 2022 v/s Average Days taken to ship
            Days taken to ship= Ship date -Order date
    Graph5: Pie chart which shows total number of orders in 2022:
            Number of orders returned v/s Number of not orders returned 

2.Dashboard Page
  
  It gives the table data for the year 2022 which includes all necessary fields such as sales ,order id ,city, country etc.
  This page is sortable and filterable and has pagination included.
  Above the page ,3 heirarchial dropdowns are placed, they interact with each other by filtering them.
  "Add Sales" button is added at end of table.On click of it a modal is opened and user can enter the order details and on click it will get added to the table.

3.Graph Page :
  
  A data granularity dropdown at start of page specifies the time line the data has to be displayed.
  By default it is set to Month , but we can change it week, quarter or year.

  First graph is empty by default, but on selecting a y axis keys , multi-y axis it will render the data of both selected filled with fields a with order dates(as per data granularity) as x axis.

  There is second graph which is a multi y axis graph,
   x-axis:order dates(as per data granularity)
   y-axis:Total Sales and Total Profit

  Third graph is also multi y axis graph with following fields,
   x-axis:order dates(as per data granularity)
   y-axis: Days to ship, discount, profit ratio,returns,quantity

  All the pages have a common header and footer which will have the link to other two pages 

  These is a common.js file which have all common functions

  Python Api:

  Getdata api is a simple function which uses pandas and returned and excel data into Json.

