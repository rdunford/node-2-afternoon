const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    massive = require('massive'),
    ctrl = require('./controller/controller')


require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

//using massive to connect our database
massive(process.env.CONNECTION_STRING).then(dbInstance =>{
    app.set('db', dbInstance);
})

//endpoints
app.get(`/api/products`, ctrl.getAll);
app.get(`/api/product/:id`, ctrl.getOne);

app.put(`/api/product/:id`, ctrl.update);

app.post(`/api/product`, ctrl.create);

app.delete(`/api/product/:id`, ctrl.delete);



const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Temperature of the sun is ${PORT} million degrees today.`))