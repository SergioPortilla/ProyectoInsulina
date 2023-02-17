import { DeleteOrders } from '../services/insulineServices';
import DeleteOrderForm from '../components/molecule/formDelete/formDeleteOrder';
import { useState } from 'react';
import { CreateOrder } from '../modelsclass/createOrder';
import decodeToken from '../services/decodeToken';

// Algunas paginas como const y otras como function, estandarizar
function DeleteOrderPage() {
  const { localValue } = decodeToken();

  // Puntos y comas
  const [deleteOrders, setDeleteOrders] = useState(new CreateOrder('', '', 0, '', '', '', 'DELETED', 0, '', ''));

  // Puntos y comas
  const deleteOrderPermission = async () => {
    const orderToDelete = await DeleteOrders(localValue!, deleteOrders);
    if (orderToDelete === 200) {
      window.alert("You're deleted correctly the order");
    } else {
      window.alert("The Id doesn't exist");
    }
  };

  return <DeleteOrderForm deleteOrder={deleteOrders} setDeleteOrder={setDeleteOrders} deleteOrderButton={deleteOrderPermission} />;
}

export default DeleteOrderPage;
