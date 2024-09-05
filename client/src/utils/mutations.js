import { gql } from '@apollo/client';

export const REMOVE_ITEM = gql`
    mutation removeItem($itemId: ID!) {
        removeItem(itemId: $itemId) {
            _id
            name
        }
    }
`

export const ADD_ITEM = gql`
mutation addItem($name: String!, $img: String, $cost: Int, $calories: Int) {
  addItem(name: $name, img: $img, cost: $cost, calories: $calories) {
    _id
    name
    img
    cost
    calories
  }
}
`;