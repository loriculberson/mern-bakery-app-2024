import { useQuery, useMutation } from '@apollo/client';
import MenuCard from './MenuCard.jsx'
import './MenuList.css'
import { QUERY_ITEMS } from '../utils/queries.js';

const MenuList = () => {
    const { loading, data } = useQuery(QUERY_ITEMS);


    const items = data?.items || [];

    const itemList = items.map(item => {
        return (
            <MenuCard key={item._id} item={item} />
        )
    })

    return (
        <div className="container">{itemList}</div>
    );

}
export default MenuList