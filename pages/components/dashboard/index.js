import OrdersTable from "./ordersTable";
const Dashboard=({orders}) =>{

  return (
    <>
      <OrdersTable orders={orders}/>
    </>
  );
}


export default Dashboard;