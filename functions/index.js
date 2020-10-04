// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HY52WFjZQ7CZLyypjqrBZjfS1f9FaXQoGXlyc7n74dPDLNNlFv7RCRBuOERWcYeHg1LSz40aorDqnHEk35m7QB100VgSMz9HB"
);

// API

// API Config
const app = express();

// API Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment request received..! " + total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  res.status(201).send({ clientSecret: paymentIntent.client_secret });
});

// listen command
exports.api = functions.https.onRequest(app);
