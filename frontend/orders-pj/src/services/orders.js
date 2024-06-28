import axios from "axios"

export const fetchOrders = async (filter) => {
    try {
        var response = await axios.get("http://localhost:5049/orders", {
            params: {
                search: filter?.search,
                sortItem: filter?.sortItem,
                sortOrder: filter?.sortOrder,
            },
        });

        return response.data.orders;
    } catch (e) {
        console.error(e)
    }

}

export const createOrder = async (order) => {
    try {
        var response = await axios.post("http://localhost:5049/orders", order);

        return response.status;
    } catch (e) {
        console.error(e)
    }

}