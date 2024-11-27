const express = require('express');
const weatherRoutes = require('./routes/weatherRoutes');
const app = express();


//Router Middlewares
app.use(express.json());
app.get('/', ()=>{
    console.log('get api');
})
app.use('/weather', weatherRoutes);

app.listen(3000, ()=>{
    console.log("server started");
})

module.exports = app;
