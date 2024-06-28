import { Input, Textarea, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function CreateOrderForm({onCreate}) {
    const [order, setOrder] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault();
        setOrder(null);
        onCreate(order);
    };

    return (
        <form onSubmit={onSubmit} className='w-full flex flex-col gap-3'>
          <h3 className='font-bold text-x1'>Создание заказа</h3>
          <Input 
            placeholder='Город отправителя'
            value={order?.sendersCity ?? ""} 
            onChange={(e) => setOrder({...order, sendersCity:e.target.value})}
          />
          <Input 
            placeholder='Адрес отправителя'
            value={order?.sendersAddress ?? ""} 
            onChange={(e) => setOrder({...order, sendersAddress:e.target.value})}
          />
          <Input 
            placeholder='Город получателя'
            value={order?.recipientsCity ?? ""} 
            onChange={(e) => setOrder({...order, recipientsCity:e.target.value})}
          />
          <Input 
            placeholder='Адрес получателя'
            value={order?.recipientsAddress ?? ""} 
            onChange={(e) => setOrder({...order, recipientsAddress:e.target.value})}
          />
          <Input 
            type="number"
            placeholder='Вес груза'
            value={order?.loadWeight ?? ""} 
            onChange={(e) => setOrder({...order, loadWeight:e.target.value})}
          />
          <form className='w-full flex flex-col gap-3'>
            <Text>Дата забора груза:</Text>
            <Input 
                type="datetime-local"
                placeholder='Дата забора груза'
                value={order?.pickupDate ?? ""} 
                onChange={(e) => setOrder({...order, pickupDate:e.target.value})}
            />
          </form>
          <Button type="submit" colorScheme='teal'>Создать</Button>
        </form>
    );
}