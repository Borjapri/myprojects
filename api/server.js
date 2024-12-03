// const express = require('express');
import express from "express";
import cors from "cors";
import events from "./events.json" assert { type: "json" };
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json()); //esto es necesario?
const port = 4000;

app.get("/events", (req, res) => {
  res.json(events);
});

app.get("/event/:id", (req, res) => {
  const eventId = parseInt(req.params.id, 10);
  const event = events.find((event) => event.id === eventId);
  if (event) {
    res.json(event);
  } else {
    res.status(404).json({ message: "problem with the server dinamic route" });
  }
});

app.post("/events", (req, res) => {
  const newEvent = req.body;
  if (!newEvent) {
    res.status(404).json({ status: 404, message: "no event found" });
  }
  events.push(newEvent);
  res.status(200).json({ status: 200, message: "newEvent done correctly" });
});

app.delete("/events/:id", (req, res) => {
  const { id } = req.params;
  const eventIndex = events.findIndex((myEvent) => myEvent.id === id);
  if (eventIndex === -1) {
    return res
      .status(404)
      .json({ status: 404, message: "nothing to eliminate" });
  }
  events.splice(eventIndex, 1);
  res.status(200).json({ status: 200, message: "event removed correctly" });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/events`);
});
