import {OrderAction, OrderActionTypes, OrderState} from "../../types/order";

const initialState: OrderState = {
    orders: [],
    page: 1,
    loading: false,
    error: null,
    limit: 10
}

export const orderReducer = (state = initialState, action: OrderAction): OrderState => {
    switch (action.type) {
        case OrderActionTypes.FETCH_ORDERS:
            return {...state, loading: true}
        case OrderActionTypes.FETCH_ORDERS_SUCCESS:
            return {...state, loading: false, orders: action.payload}
        case OrderActionTypes.FETCH_ORDERS_ERROR:
            return {...state, loading: false, error: action.payload}
        case OrderActionTypes.SET_ORDER_PAGE:
            return {...state, page: action.payload}
        default:
            return state
    }
}