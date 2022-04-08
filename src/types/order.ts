export interface OrderState {
    orders: any[],
    loading: boolean,
    error: null | string,
    page: number,
    limit: number
}

export enum OrderActionTypes {
    FETCH_ORDERS = 'FETCH_ORDER',
    FETCH_ORDERS_SUCCESS = 'FETCH_ORDER_SUCCESS',
    FETCH_ORDERS_ERROR = 'FETCH_ORDER_ERROR',
    SET_ORDER_PAGE = 'SET_ORDER_PAGE',
}

interface FetchOrderAction {
    type: OrderActionTypes.FETCH_ORDERS
}

interface FetchOrderSuccessAction {
    type: OrderActionTypes.FETCH_ORDERS_SUCCESS,
    payload: any[]
}

interface FetchOrderErrorAction {
    type: OrderActionTypes.FETCH_ORDERS_ERROR,
    payload: string,
}

interface SetOrderPage {
    type: OrderActionTypes.SET_ORDER_PAGE,
    payload: number,
}

export type OrderAction = FetchOrderAction | FetchOrderErrorAction | FetchOrderSuccessAction | SetOrderPage