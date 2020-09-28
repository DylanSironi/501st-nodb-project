const axios = require('axios');
const troopers = require('../ArrayCtrl')

module.exports = {
    getOpenTroopers: (req, res) => {       
        const troopersArray = [];
        const rand1 = Math.ceil(Math.random() * troopers.length-1);
        const rand2 = Math.ceil(Math.random() * troopers.length-1);
        const rand3 = Math.ceil(Math.random() * troopers.length-1);

        troopersArray.push(troopers[rand1])
        troopersArray.push(troopers[rand2])
        troopersArray.push(troopers[rand3])
        res.status(200).send(troopersArray)

        // axios.get(`https://swapi.dev/api/people/${rand1}`)
        // .then(response => {
        //     troopersArray.push(response.data);
        //     axios.get(`https://swapi.dev/api/people/${rand2}`)
        //     .then(response => {
        //         troopersArray.push(response.data);
        //         axios.get(`https://swapi.dev/api/people/${rand3}`)
        //         .then(response => {
        //             troopersArray.push(response.data);
        //             res.status(200).send(troopersArray)
        //         })
        //     })
        // })
        // .catch(err => console.log(err));
    }
}