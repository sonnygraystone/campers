const express = require("express");
const request = require("superagent");
const router = express.Router();

router.get("/", (req, res) => {
  return request
    .get(`https://api.doc.govt.nz/v2/campsites`)
    .set("X-API-KEY", process.env.DOC_API_KEY)
    .then((resp) => {
      res.json(resp.body);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  return request
    .get(`https://api.doc.govt.nz/v2/campsites/${id}/detail`)
    .set("X-API-KEY", process.env.DOC_API_KEY)
    .then((resp) => {
      res.json(resp.body);
    })
    .catch((err) => {
      console.log("campsites id route is failing", err.message);
    });
});

module.exports = router;
