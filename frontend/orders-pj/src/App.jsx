import CreateOrderForm from './components/CreateOrderForm';
import Order from './components/Order';
import Filters from './components/Filters';
import { useEffect, useState } from 'react';
import { createOrder, fetchOrders } from './services/orders';
import {
  Accordion
} from '@chakra-ui/react'

function App() {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState({
    search: "",
    sortItem: "date",
    sortOrder: "desc",
  });

  useEffect(() => {
    const fetchData = async () => {
      let orders = await fetchOrders(filter);
      setOrders(orders);
    }

    fetchData();
  }, [filter]);

  const onCreate = async (order) => {
    await createOrder(order);
    let orders = await fetchOrders(filter);
    setOrders(orders);
  }

  return (
    <section className='p-8 flex flex-row justify-start items-start gap-12'>
      <div className='flex flex-col w-1/3 gap-10'>
        <CreateOrderForm onCreate={onCreate}/>
        <Filters filter={filter} setFilter={setFilter}/>
      </div>

      <ul className='flex flex-col gap-5 w-1/2'>
        <Accordion allowToggle>
            {orders.map((o) => (
              <Order 
                key={o.id}
                id={o.id} 
                sendersCity={o.sendersCity} 
                sendersAddress={o.sendersAddress} 
                recipientsCity={o.recipientsCity} 
                recipientsAddress={o.recipientsAddress} 
                loadWeight={o.loadWeight} 
                pickupDate={o.pickupDate} 
                createdAt={o.createdAt}
              />
            ))}
          </Accordion>
      </ul>
    </section>
  );
}

export default App
