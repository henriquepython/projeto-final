import { OneK } from "@mui/icons-material";
import { TableOrders } from "../shared/components";
import { useAppStoreContext } from "../shared/contexts";

//find by id order userid=user
//const {user} = useAppStoreContext()
const order = [
    {
    totalPrice: 1, status: 'OK', userId:'fiaif' 
    }]

export const Accounts = () => {
    return (
        <>
            <TableOrders orders={order} />
        </>
    );
}