const typeDefs = `
  type Item {
    _id: ID
    name: String
    img: String
    cost: Int
    calories: Int
  }

  type Query {
    items: [Item]!
  }

  type Mutation {
    addItem(name: String!, img: String, cost: Int, calories: Int): Item
    removeItem(itemId: ID!): Item
  }
`;

module.exports = typeDefs;
