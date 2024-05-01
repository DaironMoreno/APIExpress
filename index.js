const express = require("express");
const routerAPI = require('./router/index');
const errorAsync = require("express-async-errors");
const {logerror, errorhandler,BoomErrorhandler} = require('./middleware/error.handler');
const app = express();
const port = 3000;

app.use(express.json());
routerAPI(app);
app.use(logerror);
app.use(BoomErrorhandler);
app.use(errorhandler);


app.listen(port,()=>{
    console.log("iniciando servidor, puerto " + port + "...");
}); 