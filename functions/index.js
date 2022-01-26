const functions = require("firebase-functions");

const express= require("express");
const cors =require("cors");

const stripe=require("stripe")('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')

//API



//App config

const app= express();

//MiddleWares
app.use(cors({origin:true}));
app.use(express.json());

//API routes

app.get('/',(request,response)=> response.status(200).send('hello world'))

app.post("/payments/create",async(request,response)=>{
    const total = request.query.total;
    console.log('payments request received yoo!!! for this amount--->',total);
    const paymentIntent= await stripe.paymentIntents.create({
        amount:total,
        currency:"usd"
    });
    //ok created
    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    });
})
//listen command

exports.api=functions.https.onRequest(app)

