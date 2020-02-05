import express from "express";
import path from "path";

import { getIllnesses } from "./illness";
import { createVisit, getVisit, updateVisit } from "./visit";

const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, "../dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");

app.use(express.static(DIST_DIR));
app.use(express.json());

app.get("/api/illnesses", (req, res) => {
  const illnesses = getIllnesses();
  res.send(illnesses);
});

app.post("/api/visit", (req, res) => {
  const visit = createVisit(req.body.ssn);
  res.send(visit);
});

app.put("/api/visit", (req, res) => {
  const visit = updateVisit(req.body);
  res.send(visit);
});

app.get("/api/visit", (req, res) => {
  const visit = getVisit(req.body.ssn);
  res.send(visit);
});

app.get("/", (req, res) => {
  res.sendFile(HTML_FILE);
});

app.listen(port, function() {
  console.log("App listening on port: " + port);
});
