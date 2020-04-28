const express = require('express');
const database = require('./database');

const app = express();

app.set('port',process.env.PORT || 3000);

app.set('views','./app/views');
app.set('view engine','pug');

app.use("/public",express.static('./public'));

var router = require('./router');

app.use('/',router);

database(function(){
app.listen(app.get('port'),function(){
    console.log("App is running at"+app.get('port'));
});
});