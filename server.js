const express = require("express");
const expressFileUpload = require('express-fileupload')
const cors = require("cors");
const app = new express();
const router = require('./modules/routes')

app.use(expressFileUpload());
app.use(express.json())
app.use(cors());
app.use(router)

app.listen(process.env.PORT,console.log('appp is run'));
