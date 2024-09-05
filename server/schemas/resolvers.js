const { Item } = require('../models');

const resolvers = {
    Query: {
        items: async () => {
            return Item.find();
        }
    },

    Mutation: {
        addItem: async (parent, { name, img, cost, calories }) => {
            return Item.create({ name, img, cost, calories})
        },
        removeItem: async (parent, { itemId }) => {
            return Item.findOneAndDelete({ _id: itemId });
        },
    }
};

module.exports = resolvers;