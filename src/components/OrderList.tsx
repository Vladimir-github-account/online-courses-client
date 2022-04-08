import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const OrderList: FC = () => {
    const {orders, error, limit, loading, page} = useTypedSelector(state => state.order)
    const {fetchOrders, setOrderPage} = useActions()
    const pages = [1, 2, 3, 4, 5];
    useEffect(() => {
        fetchOrders(page, limit);
    }, [page])

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            {orders.map(order => <div key={order.id}>{order.id} - {order.title}</div>)}
            <div style={{display: "flex"}}>
                {pages.map(p =>
                    <div onClick={() => setOrderPage(p)}
                        style={{border:p === page ? '2px solid green' : '1px solid gray', padding : 10}}>
                        {p}
                    </div>)}
            </div>
        </div>
    );
};

export default OrderList;