import {OrderAction, OrderActionTypes} from "../../types/order";
import {Dispatch} from "react";
import axios from "axios";

export const fetchOrders = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<OrderAction>) => {
        try {
            dispatch({type: OrderActionTypes.FETCH_ORDERS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit}
            })
            dispatch({type: OrderActionTypes.FETCH_ORDERS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: OrderActionTypes.FETCH_ORDERS_ERROR,
                payload: 'Order load error'
            })
        }
    }
}

export function setOrderPage(page: number): OrderAction {
    return {type: OrderActionTypes.SET_ORDER_PAGE, payload: page}
}