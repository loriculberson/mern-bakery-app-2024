import { EditOutlined, EllipsisOutlined, SettingOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Card } from 'antd';
const { Meta } = Card;
import { useMutation } from '@apollo/client';

import { QUERY_ITEMS } from '../utils/queries.js';
import { REMOVE_ITEM } from '../utils/mutations.js';

const MenuCard = ({ item }) => {
    const { _id, name, img, calories, cost } = item

    const [removeItem] = useMutation(REMOVE_ITEM, {
        variables: { itemId: _id},
        refetchQueries: [
            QUERY_ITEMS,
            'items'
          ]
    });


    // eslint-disable-next-line react/prop-types
    return (
        <Card
            key={_id}
            style={{
                width: 300,
            }}
            cover={
                <img
                    alt={name}
                    src={img}
                />
            }
            actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <CloseCircleOutlined key="close" onClick={removeItem}/>
            ]}
        >
            <Meta
                title={name}
                description={`calories: ${calories}   | cost $${cost / 100}`}
            />
        </Card>
    )

}

export default MenuCard