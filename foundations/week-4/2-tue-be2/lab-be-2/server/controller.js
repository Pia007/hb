const houses = require('./db.json');

let globalID = 4;

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses);
    },
    createHouse: (req, res) => {
        const { address, price, imageURL } = req.body;
        
        const newHouse = {
            id: globalID++,
            address,
            price: Number(price),
            imageURL
        };
        houses.push(newHouse);
        res.status(200).send(houses);
    },
    updateHouse: (req, res) => {
        const { id } = req.params;
        const { type } = req.body;
        const house = houses.find(house => house.id === Number(id));
        if (type === 'plus') {
            house.price += 10000;
        } else {
            house.price -= 10000;
        }
        res.status(200).send(houses);

    },
    deleteHouse: (req, res) => {
        const { id } = req.params;

        const house = houses.find(house => house.id === Number(id));
        
        houses.splice(houses.indexOf(house), 1);
        
        res.status(200).send(houses);
    },
}