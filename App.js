const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');


require('dotenv').config()

//    **********      Database Connected         **********




require("./DbConnection/DbConnection");




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));





app.use(cors({
    origin: '*' // allow requests from this domain
  }));




  const ProductSectionRouter = require('./routes/ProductSectionRoute')





// ***************************  All Routes  ******************************************



const productSectionRoute = require("./routes/ProductSectionRoute");












app.use( "" , productSectionRoute);












  app.get( "/api/hello" , ( req , res ) => {

    res.send("App Running");

})



app.use('' , ProductSectionRouter)





const port = process.env.PORT || 3001;

app.listen( port , () => {

    console.log("App listening on port 3001");

} );