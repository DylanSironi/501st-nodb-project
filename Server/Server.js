const express = require('express');
const holoChartsCtrl = require('./Controllers/HoloChartsCtrl');
const troopCtrl = require('./Controllers/TroopCtrl');
// const troopers = require('../ArrayCtrl');
const app = express();
app.use(express.json());

app.get('/api/open-troopers', holoChartsCtrl.getOpenTroopers);

app.get('/api/my-troopers', troopCtrl.getMyTroopers);
app.post('/api/my-troopers', troopCtrl.recruitTroopers);
app.put('/api/my-troopers/:id', troopCtrl.editName);
app.delete('/api/my-troopers/:id', troopCtrl.KIATroopers);

app.listen(3333, () => console.log('Server is running on 3333'));