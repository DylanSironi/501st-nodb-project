const troopers = require('../ArrayCtrl');
const myTroopers = [];
let id = 1;

module.exports = {
    getMyTroopers: (req, res) => {
        res.status(200).send(myTroopers);
    },

    recruitTroopers: (req, res, ) => {
        const {troopers} = req.body;
        // const troopers = require('../ArrayCtrl');
        troopers.id = id;
        id++;

        myTroopers.push(troopers);
        res.status(200).send(myTroopers);
    },

    editName: (req, res) => {
        const {id} = req.params;
        const {name} = req.body;

        const troopers = myTroopers.find(element => element.id === +id);
        troopers.name = name;
        res.status(200).send(myTroopers);
    },

    KIATroopers: (req, res) => {
        const {id} = req.params;

        const index = myTroopers.findIndex(element => element.id === +id);
        myTroopers.splice(index, 1);
        res.status(200).send(myTroopers);
    }
}
